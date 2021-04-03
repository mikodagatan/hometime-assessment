# Hometime Assessment

## How to start the application

### Start docker environment

```bash
docker-compose up
```

### Access Docker for commands

```bash
docker-compose exec api bash #Rails API
docker-compose exec app bash #ReactJS
```

### Commands within Docker container (App)

```bash
yarn (install node package when needed)
yarn test
yarn lint
yarn lint-fix
```

## Stack

- Backend API Framework: [Rails](https://reactjs.org/)
- Frontend Framework: [ReactJS](https://reactjs.org/)
- UI Framework: [Material UI](https://material-ui.com/)
- Querying Library: [React Query](https://react-query.tanstack.com/)
- Linter: ESLint, Prettier, Husky

## Code rules

- remove all console logs in code.

## Styling rules

- Don't Repeat Yourself (DRY)
- If a theme if you find the need. Refer to [Material UI](https://material-ui.com/).
- Use `Typography` to style your text.
- Use `Box` as much as possible as your `div`.
- Use `makeStyles` from Material UI when styling your component.

## Terminal rules

- Do not use `npm` commands. Use `yarn`. Remove package-lock.json if `npm` commands are accidentally ran.
