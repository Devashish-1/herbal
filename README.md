# 🌿 Herbal Garden – Digital Medicinal Plant Explorer

Herbal Garden is a powerful web application that brings traditional medicinal plant wisdom to a modern audience. Built with cutting-edge 3D and AI technologies, it allows users to explore lifelike plant models, understand their uses, and now, locate nearby plant nurseries and interact with a smart chatbot assistant. Designed for students, plant lovers, and herbal medicine enthusiasts, this platform blends learning and discovery into a single seamless experience.

---

## 📌 Features

### 🔹 Core Functionalities

* 🎍 Interactive 3D plant visualization using React Three Fiber & Three.js
* 📚 Educational profiles for each plant: benefits, origin, and uses
* 🧺 Personalized digital garden where users can collect and manage plants
* 🔐 Secure user authentication with Firebase

### 🌟 Latest Additions

* 📍 **Nearby Plant Nurseries Map**
  * Live demo: [https://nurseries-herbal-garden.vercel.app](https://nurseries-herbal-garden.vercel.app)
  * Uses Geolocation API to get user position
  * Displays nurseries on Google Maps with clickable markers
  * Shows names and addresses in a dynamic list

* 🤖 **AI Chatbot for Herbal Assistance**
  * Live demo: [https://herbal-garden-chatbot.vercel.app](https://herbal-garden-chatbot.vercel.app)
  * Built with OpenAI API
  * Answers real-time questions about medicinal plants
  * User-friendly interface embedded in the web app

---

## 🧱 Tech Stack

| Layer       | Technology Stack                             |
| ----------- | -------------------------------------------- |
| Frontend    | React.js, React-Three-Fiber, Three.js, MUI   |
| Backend     | Node.js, Express.js, CORS, REST APIs         |
| Chatbot API | OpenAI , Gemini ,YOLO
| Maps API    | Google Maps JavaScript SDK + Places API      |
| Hosting     | Vercel                                       |
| Auth        | Oauth | Firebase                  |

---

## 🏗️ Project Structure

\`\`\`
├── public/
│   ├── VirtualGarden.glb      # 3D garden model
│   ├── index.html             # Entry point for the web app
│   └── manifest.json          # PWA manifest
├── src/
│   ├── components/
│   │   ├── ChatbotButton.jsx  # Chatbot integration
│   │   ├── DrawerAppBar.js    # Navigation component
│   │   ├── PlantInfor/       # Plant information components
│   │   └── home/             # Home page components
│   ├── Pages/
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ChatBotPage.jsx
│   │   └── NearbyNurseries.jsx
│   ├── App.js
│   └── index.js
\`\`\`

---

## ⚙️ How It Works

### 🔎 3D Plant Exploration
* Interactive 3D garden environment with detailed plant models
* Users can explore different medicinal plants in a virtual space
* Each plant comes with detailed information and usage guidelines

### 🗺️ Nearby Nurseries Feature
* Access the nursery locator at [https://nurseries-herbal-garden.vercel.app](https://nurseries-herbal-garden.vercel.app)
* Find local nurseries within your area
* Get directions and contact information for each nursery

### 🤖 AI Chatbot
* Access the chatbot at [https://herbal-garden-chatbot.vercel.app](https://herbal-garden-chatbot.vercel.app)
* Get instant answers about medicinal plants
* Learn about plant properties, uses, and cultivation tips

---

## 🛠️ Installation and Setup

### 1. 📥 Clone the repository

\`\`\`bash
git clone https://github.com/Devashish-1/herbal.git
cd herbal
\`\`\`

### 2. 📦 Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. 🔐 Configure environment variables

Create a \`.env\` file at the root:

\`\`\`env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_FIREBASE_CONFIG=your_firebase_config
\`\`\`

### 4. 🚀 Run the development server

\`\`\`bash
npm start
\`\`\`

Visit \`http://localhost:3000\` to view the app.

---

## 💡 Usage

* **Landing Page:** Introduction to the Herbal Garden platform
* **Virtual Garden:** Explore the 3D garden environment
* **Plant Information:** Access detailed medicinal plant data
* **Nursery Locator:** Find nearby plant nurseries
* **Chatbot Assistant:** Get instant help with plant-related queries

---

## 🌐 Live Demo Links

* ✨ Main Application: [https://herbal-ten.vercel.app](https://herbal-kp4bot0jt-devashish-1s-projects.vercel.app/)
* 🤖 Chatbot Interface: [https://herbal-garden-chatbot.vercel.app](https://herbal-garden-chatbot.vercel.app)
* 📍 Nursery Locator: [https://nurseries-herbal-garden.vercel.app](https://nurseries-herbal-garden.vercel.app)

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork this repository
2. Create your feature branch (\`git checkout -b feature/new-feature\`)
3. Commit your changes (\`git commit -m 'Add some feature'\`)
4. Push to the branch (\`git push origin feature/new-feature\`)
5. Open a Pull Request

---

## 📬 Contact

Have questions or suggestions? Feel free to:
* Open an issue on [GitHub](https://github.com/Devashish-1/herbal)
* Visit our deployed app at [https://herbal-ten.vercel.app](https://herbal-ten.vercel.app)

---

Enjoy exploring the world of medicinal plants with Herbal Garden! 🌱
