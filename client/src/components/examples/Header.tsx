import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header
      userType="customer"
      location="Downtown Seattle"
      notifications={3}
      onLocationClick={() => console.log('Location clicked')}
      onNotificationClick={() => console.log('Notifications clicked')}
      onMenuClick={() => console.log('Menu clicked')}
      onProfileClick={() => console.log('Profile clicked')}
    />
  );
}