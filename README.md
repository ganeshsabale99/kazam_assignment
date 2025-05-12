# 🚀 Kazam Assignment - Full Stack Task

## Clone the repository

```bash
git clone https://github.com/ganeshsabale99/kazam_assignment.git
```

## Install dependencies

```bash
npm install
```

## Run the application

```bash
npm start
```


## 📸 Screenshots
  
![](screenshot/1.png)
![](screenshot/2.png)
![](screenshot/3.png)
![](screenshot/4.png)
![](screenshot/5.png)

*(Add your own screenshots in the `/screenshots` folder)*

---

### 🛠 Tech Stack

#### 🔧 Backend
- **Node.js** + **Express.js** (HTTP API)
- **TypeScript**
- **MQTT.js** (MQTT client)
- **Redis** (as in-memory cache)
- **MongoDB Atlas** (as database)
- **Mongoose** (ODM for MongoDB)

#### 📦 Infrastructure
- **Redis Cloud** (RedisLabs)
- **MongoDB Atlas** (Cloud MongoDB database)

#### 🌐 Frontend
- **React.js** (with Vite)
- **TypeScript**
- **CSS / SCSS** for styling
- **Tailwind CSS** *(Optional but preferred)*
- **Responsive Design** based on Figma [Note App Design](https://www.figma.com/proto/x3I0bqXvZeMQ34gAfLUogk/Note-App?node-id=0%3A3&scaling=scale-down&page-id=0%3A1)

#### ✅ Features
## Add new tasks via MQTT `/add` topic
## Tasks stored in Redis using key: `FULLSTACK_TASK_<Your_First_Name>`
## Automatic migration to MongoDB after 50 items
## Retrieve tasks using `GET /fetchAllTasks` HTTP API
## Reusable, responsive frontend components


---

## 📦 Deployment

## Netlify - https://genuine-sunshine-7d2cce.netlify.app/
## Backend - https://kazam-assignment-vjeq.onrender.comfetchAllTasks
## GitHub - https://github.com/ganeshsabale99/kazam_assignment

---

## 📦 Redis Configuration - 

 
## Host: redis-12675.c212.ap-south-1-1.ec2.cloud.redislabs.com
## Port: 12675
## Username: default
## Password: dssYpBnYQrl01GbCGVhVq2e4dYvUrKJB

## 📦 MongoDB Configuration -

## DB URL mongodb+srv://assignment_user:HCgEj5zv8Hxwa4xO@testcluster.6f94f5o.mongodb.net/
## Database: assignment
## Collection: assignment_ganesh


---

## 👨‍💻 Author

**Ganesh Sabale**  
📧 Email: [sabaleganesh99@gmail.com](mailto:sabaleganesh99@gmail.com)

---

🙌 **Thank You for reviewing!**

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
