export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Test',
      url: '/componentTest',
      icon: 'icon-cog',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      badge: {
        variant: 'info',
        text: '1',
      },
      children: [
        {
          name: 'MaskedInput',
          url: '/components/maskedInput',
          icon: 'icon-wrench',
        },
      ]
    }
  ]
};
