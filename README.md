# CustomLearning Component

## Overview

The `CustomLearning` component is a React component designed to provide an interactive e-learning experience. It features tab navigation, video playback, and responsive design to ensure a seamless user experience across devices.

## Features

- **Tab Navigation**: Users can switch between different tabs to view different content.
- **Video Playback**: Each tab can trigger a modal that plays a video.
- **Responsive Design**: The component adapts to different screen sizes, offering both desktop and mobile-friendly layouts.
- **Animations**: Includes smooth animations for modal opening and closing, as well as tab content transitions.

## Props

- **activeTab** (number): The initially active tab when the component loads.

## Usage

### Tab Navigation

- The component displays a set of tabs, each associated with different content.
- Clicking on a tab will display the content related to that tab.
- On desktop, tabs are displayed on the left with the content on the right.
- On mobile, tabs are displayed as an accordion for better space utilization.

### Video Modal

- Each tab includes a button to open a modal that plays a video.
- The modal includes a loading spinner while the video is buffering.
- The modal can be closed by clicking outside the modal or on the close icon.

### Icons and Images

- The component uses various icons and images to represent different tabs and their content.
- These assets are imported from the `../public/Images/` directory.

## Structure

### State Management

- **openTab**: Keeps track of the currently active tab.
- **activeOfferIndex**: Manages the active index for the accordion in mobile view.
- **modal**: Boolean state to control the visibility of the video modal.
- **videoLoading**: Boolean state to indicate whether the video is loading.
- **videoUrl**: Stores the URL of the video to be played.
- **hasOpenedOnce**: Ensures the loading spinner is only shown the first time a video is loaded.
- **isClosing**: Boolean state to handle modal closing animation.

### Event Handlers

- **toggleTabs(tabNumber)**: Sets the active tab to the specified tab number.
- **toggleOffers(index)**: Toggles the visibility of the accordion content in mobile view.
- **openModal(url)**: Opens the video modal and sets the video URL.
- **closeModal()**: Closes the video modal with an animation delay.

### Effects

- **useEffect**: Clears the video URL when the modal is closed.

### Dependencies

- npm install react
- npm install react-icons
- npm install react-player


## Example

```jsx
import CustomLearning from './path/to/CustomLearning';

const App = () => {
    return <CustomLearning activeTab={1} />;
};

export default App;
