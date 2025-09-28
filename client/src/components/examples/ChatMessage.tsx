import ChatMessage from '../ChatMessage';
import mechanic1 from '@assets/generated_images/Professional_mechanic_portrait_photo_dea65d2d.png';

export default function ChatMessageExample() {
  // TODO: remove mock functionality
  const messages = [
    {
      id: "msg-1",
      text: "Hi! I can help you with your brake issue. When would be a good time to schedule the service?",
      timestamp: "2:30 PM",
      isOwn: false,
      senderName: "Mike Johnson",
      senderAvatar: mechanic1,
    },
    {
      id: "msg-2", 
      text: "That would be great! How about tomorrow afternoon?",
      timestamp: "2:32 PM",
      isOwn: true,
      isRead: true,
    },
    {
      id: "msg-3",
      text: "Perfect! I can be there at 3 PM. I'll bring all the necessary tools and brake pads.",
      timestamp: "2:33 PM", 
      isOwn: false,
      senderName: "Mike Johnson",
      senderAvatar: mechanic1,
    },
  ];

  return (
    <div className="p-4 space-y-4 max-w-md">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}