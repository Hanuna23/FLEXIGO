import ServiceRequestForm from '../ServiceRequestForm';

export default function ServiceRequestFormExample() {
  return (
    <div className="p-4">
      <ServiceRequestForm
        onSubmit={(data) => console.log('Form submitted:', data)}
        onCancel={() => console.log('Form cancelled')}
      />
    </div>
  );
}