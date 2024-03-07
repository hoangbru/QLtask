# This is a personal project called QLtask, which is built based on the Trello.

## Preview
![image](https://res.cloudinary.com/dxa8ks06k/image/upload/v1709804672/takemichi/org_qnpjbx.png)

![image](https://res.cloudinary.com/dxa8ks06k/image/upload/v1709804672/takemichi/board_nqz3uu.png)

![image](https://res.cloudinary.com/dxa8ks06k/image/upload/v1709804672/takemichi/card_uqeqqj.png)

![image](https://res.cloudinary.com/dxa8ks06k/image/upload/v1709804672/takemichi/front_i2go6p.png)

Key Features:
- Auth 
- Organizations / Workspaces
- Board, list, card creation
- Activity log for entire organization
- List, card drag & drop reorder and copy
- Stripe subscription for each organization to unlock unlimited boards

## Main Technologies

- Next.js, Server Actions.
- Tailwind CSS, shadcn/ui.
- React-query, Prisma.
- Stripe

### Prerequisites

**Node version 18.17.x or later**

### Cloning the repository

```shell
git clone https://github.com/hoangbru/QLtask.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
NEXT_PUBLIC_STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=
```

### Setup Prisma

Add PostgreSQL Database

```shell
npx prisma migrate dev 

```

### Start the app

```shell
npm run dev
```
Now the project is running on port 3000 (http://localhost:3000).
