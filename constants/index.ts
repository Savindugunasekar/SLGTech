export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    
    {
      label: 'My Profile',
      route: '/profile',
    },
    {
        label: 'Create Event',
        route: '/events/create',
        role:'org:admin'
      },
      {
        label: 'Admin dashboard',
        route: '/events/dashboard',
        role:'org:admin'
      },
  ]
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }
  