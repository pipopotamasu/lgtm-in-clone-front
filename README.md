[lgtm.in](https://lgtm.in/) clone application frontend created by react.

## How to setup
If you want to setup with backend api server, see https://github.com/pipopotamasu/lgtm-in-clone/blob/master/README.md.

This is setup process to work as standalone by mocking backend api.

```
$ git clone https://github.com/pipopotamasu/lgtm-in-clone-front.git
$ cd lgtm-in-clone-front
$ yarn mock-server
# open another terminal tab
$ cd path/to/lgtm-in-clone-front
$ yarn start:mock
# you can visit http://localhost:3000
```

## ecosystem
- TypeScript
- React(using hooks)
- redux(using hooks)
- react router dom(using hooks)
- immer
- styled-components
- eslint / prettier
- jest / react testing library
- github actions
