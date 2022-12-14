## Description

Backend marketplace of flowers

## Stack
NestJS/TypeScript, GraphQL, PostgreSQL

## Installation

##### PostgreSQL
Install PostgreSQL https://www.postgresql.org/download/ 
Create database "marketplace-flowers"
Set the password "root" in the Login/Groupe Roles - postgres

##### NPM

```bash
$ npm install
```

## Running the app

```bash
$ npm run start:dev
```

## GraphQL
Follow the link http://localhost:5000/graphql

##### Create menu

```bash
mutation CreateMenu {
  createMenu(createMenuInput: {
    name:"Header menu"
  }){
    id
    name
  }
}
```

##### Get all menus

```bash
query GetAllMenu{
  getAllMenus{
    id
    name
    item{
      id
      name
      serial_number
      link
    }
  }
}
```

##### Get menu by ID

```bash
query GetMenuByID{
  getMenuByID(id: 1){
    id
    name
  }
}
```

##### Update menu

```bash
mutation UpdateMenu{
  updateMenu(updateMenuInput: {
    id: 1
    name: "Footer menu"
  }){
    id
    name
    createAt
    updateAt
  }
}
```

##### Delete menu

```bash
mutation DeleteMenu{
  removeMenu(id: 1){
    id
    name
  }
}
```

etc.

## Contact

- Telegram - [@alexsmith_proff](http://t.me/@alexsmith_proff)
- Email - alexsmith_proff@mail.ru