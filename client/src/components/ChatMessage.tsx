import { Check, CheckCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  isRead?: boolean;
  senderName?: string;
  senderAvatar?: string;
}

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${message.isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
      {!message.isOwn && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={message.senderAvatar} alt={message.senderName} />
          <AvatarFallback>
            {message.senderName?.split(' ').map(n => n[0]).join('') || 'U'}
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={`flex flex-col max-w-[70%] ${message.isOwn ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-lg px-3 py-2 ${
            message.isOwn
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          }`}
          data-testid={`message-${message.id}`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
        
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs text-muted-foreground" data-testid={`time-${message.id}`}>
            {message.timestamp}
          </span>
          {message.isOwn && (
            <div className="flex items-center">
              {message.isRead ? (
                <CheckCheck className="h-3 w-3 text-primary" />
              ) : (
                <Check className="h-3 w-3 text-muted-foreground" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}