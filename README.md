Created Project of TodoList based on React and NextJS


This is the preview of my project


![Screenshot 2024-11-28 212617](https://github.com/user-attachments/assets/f45b9ee5-a1cf-4753-b7dc-c102fbb4a6ef)



The "Add Task" functionality allows users to create a new task by entering a title and description in the input fields.

How it works:

The useState hook is used to manage the state for title, desc, and the list of tasks (maintask).
When the user fills out the form and submits, the submitHandler function is triggered.
The title and desc entered by the user are added as a new task object {title, desc} to the maintask array.
After the task is added, the input fields are cleared, and the updated task list is displayed.







2. Delete Todo List Task
The "Delete Task" functionality allows users to delete a task from the list.

How it works:

The deleteHandler function takes an index i as an argument.
It creates a copy of the maintask array and removes the task at index i using the splice() method.
The task list is then updated with the modified array, removing the task from the UI.

![Screenshot 2024-11-28 212943](https://github.com/user-attachments/assets/0f92312b-f60b-4584-b14c-5ecdae1074d8)

The app has a simple user interface with the following features:

Add Task Form: Users can input a task title and description, then click the "Add Task" button to add a task to the list.
Task List: Below the form, the tasks are displayed with their respective titles and descriptions.


![Screenshot 2024-11-28 213008](https://github.com/user-attachments/assets/2888e812-91dd-433a-acd4-d6ac9c2d20bf)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
