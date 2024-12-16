function ToolbarButton(toolbarButtonConfig) {
  const { buttonTitle, buttonIcon, destinationURL } = toolbarButtonConfig;
  browser.spacesToolbar.addButton('SimpleLogin', {
    title: buttonTitle,
    defaultIcons: buttonIcon,
    url: destinationURL,
  });
}

const toolbarButtonSettings = {
  buttonTitle: 'SimpleLogin',
  buttonIcon: 'icons/simplelogin-icon-1024.svg',
  destinationURL: 'https://app.simplelogin.io/'
};

ToolbarButton(toolbarButtonSettings);
