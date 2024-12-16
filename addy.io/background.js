function ToolbarButton(toolbarButtonConfig) {
  const { buttonTitle, buttonIcon, destinationURL } = toolbarButtonConfig;
  browser.spacesToolbar.addButton('addyio', {
    title: buttonTitle,
    defaultIcons: buttonIcon,
    url: destinationURL,
  });
}

const toolbarButtonSettings = {
  buttonTitle: 'addy.io',
  buttonIcon: 'icons/addyio-icon-1024.svg',
  destinationURL: 'https://app.addy.io/'
};

ToolbarButton(toolbarButtonSettings);