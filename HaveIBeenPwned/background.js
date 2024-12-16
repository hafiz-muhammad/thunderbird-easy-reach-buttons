function ToolbarButton(toolbarButtonConfig) {
  const { buttonTitle, buttonIcon, destinationURL } = toolbarButtonConfig;
  browser.spacesToolbar.addButton('HaveIBeenPwned', {
    title: buttonTitle,
    defaultIcons: buttonIcon,
    url: destinationURL,
  });
}

const toolbarButtonSettings = {
  buttonTitle: 'Have I Been Pwned?',
  buttonIcon: 'icons/haveibeenpwned-icon-1024.svg',
  destinationURL: 'https://haveibeenpwned.com/'
};

ToolbarButton(toolbarButtonSettings);
