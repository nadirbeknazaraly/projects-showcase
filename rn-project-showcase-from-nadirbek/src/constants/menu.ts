enum MenuRoute {
  Info = 'Info',
  Login = 'Login',
  Connect = 'Connect',
  Payment = 'Payment',
  Settings = 'Settings',
  Addresses = 'Addresses',
  Notifications = 'Notifications',
}

enum SettingsRoute {
  AlertsSettings = 'AlertsSettings',
  LanguageSettings = 'LanguageSettings',
  SettingsNavigation = 'SettingsNavigation',
}

const MENU_WIDTH = 278;

const MENU_ANIMATION_SPEED = 200;

const MenuMainRouteName = 'menu';

export {
  MENU_WIDTH,
  MenuRoute,
  SettingsRoute,
  MenuMainRouteName,
  MENU_ANIMATION_SPEED,
};
