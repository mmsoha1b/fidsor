## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


## Libraries Used:
- Tailwind
- React-Redux
- Redux Toolkit

## Working

- Implemented modals usng custom css. This can also be achieved through a 3rd party library, but as the project is a simple one, opted to complete it with custom styling.
- Handled state managment using Redux. Made two slices, one to handle the modals UI data and one for the user data.
- Data is paced between the modals in the form of props being sent form the Edit Modal to the Confirm Modal

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
