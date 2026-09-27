# ⌨️ LetsType

> **Type faster. Type smarter. Improve every day.**

LetsType is a modern, responsive typing practice web application built with **React.js**. It helps users improve their typing speed, accuracy, consistency, and confidence through timed typing tests, practice sessions, real-time feedback, and progress tracking.

The project is designed as a clean, portfolio-quality frontend application with a distraction-free typing experience.

---

## ✨ Features

### ⌨️ Typing Test

* Choose test duration:

  * 15 seconds
  * 30 seconds
  * 60 seconds
  * 120 seconds
* Choose difficulty:

  * Easy
  * Medium
  * Hard
* Choose text category:

  * Random
  * General
  * Technology
  * Programming
  * Quotes
* Real-time WPM calculation
* Real-time accuracy calculation
* Correct and incorrect character highlighting
* Error tracking
* Character progress tracking
* Automatic test completion
* Restart and change-test options

### 📊 Real-Time Statistics

During a typing test, TypingSkill tracks:

* Words Per Minute (WPM)
* Accuracy
* Remaining time
* Typed characters
* Errors
* Progress

WPM is calculated using the standard formula:

```text
WPM = (Correct Characters / 5) / Elapsed Minutes
```

Accuracy is calculated using:

```text
Accuracy = (Correct Characters / Total Typed Characters) × 100
```

---

## 🏆 Results

After completing a test, users receive a detailed result screen containing:

* WPM
* Accuracy
* Correct characters
* Incorrect characters
* Total characters
* Performance level

Performance messages include:

* Beginner
* Getting Better
* Good Job
* Great Typing
* Excellent

Users can immediately:

* Try Again
* Change Test
* Return Home

---

## 🧠 Practice Mode

Practice Mode allows users to type without a countdown timer.

It provides:

* Random typing passages
* Real-time WPM
* Accuracy
* Error count
* Character progress
* New text option
* Reset functionality

This mode is useful for users who want to focus on improving consistency without the pressure of a timer.

---

## ⌨️ On-Screen Keyboard

TypingSkill includes an optional virtual keyboard.

It displays:

* Numbers
* Letters
* Space
* Backspace

The next expected key is visually highlighted to help users become familiar with keyboard positioning.

The keyboard can be enabled or disabled according to the user's preference.

---

## 📈 Progress Dashboard

TypingSkill stores completed test results in the browser using **LocalStorage**.

The Progress dashboard displays:

* Best WPM
* Average WPM
* Best Accuracy
* Average Accuracy
* Total tests
* Total typing time
* Recent test results
* Recent WPM visualization

The recent-test table includes:

| Information | Description                    |
| ----------- | ------------------------------ |
| Date        | Date of the test               |
| Duration    | Test duration                  |
| WPM         | Words per minute               |
| Accuracy    | Typing accuracy                |
| Errors      | Number of incorrect characters |

Users can also clear their complete typing history after confirmation.

---

## 🌙 Dark & Light Mode

TypingSkill supports both:

* Dark Mode
* Light Mode

The selected theme is stored in LocalStorage, so the user's preference remains after refreshing the page.

---

## 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The layout adapts to smaller screens with:

* Mobile navigation
* Responsive typing area
* Touch-friendly controls
* Responsive statistics
* Mobile-friendly virtual keyboard

---

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* JSX
* HTML
* CSS

### React Concepts

* `useState`
* `useEffect`
* `useRef`
* `useCallback`
* Custom Hooks
* Component-based architecture

### Browser APIs

* LocalStorage
* Browser scrolling
* Keyboard input events

### Build Tool

* Vite

---

## 📂 Project Structure

```text
LetsType/
│
├── index.html
├── package.json
├── package-lock.json     
├── vite.config.js        
├── README.md
├── .gitignore
│
└── src/
    │
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    │
    ├── components/
    │   ├── Header.jsx
    │   ├── Icon.jsx
    │   ├── Keyboard.jsx
    │   ├── Results.jsx
    │   └── TypingArea.jsx
    │
    ├── data/
    │   └── passages.js
    │
    ├── hooks/
    │   ├── useLocalStorage.js
    │   └── useTypingTest.js
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Practice.jsx
    │   ├── Progress.jsx
    │   └── TypingTest.jsx
    │
    └── utils/
        └── typing.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sanjugupta65/LetsType.git
```

### 2. Navigate to the project

```bash
cd typingskill
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in your terminal.

---

## 🧪 Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎯 Project Goals

The main goals of TypingSkill are to provide a simple and focused environment for improving:

* Typing speed
* Typing accuracy
* Keyboard familiarity
* Consistency
* Typing confidence

The application intentionally keeps the interface clean so that the typing experience remains the primary focus.

---

## 🔐 Data & Privacy

LetsType does not use a backend or database.

Test results and preferences are stored locally in the user's browser using:

```text
localStorage
```

No account or authentication is required.

Clearing the browser's LocalStorage will remove the locally stored typing history and preferences.

---

## 🚫 No Backend Required

LetsType is completely frontend-based.

The project does **not** use:

* Node.js backend
* Express
* MongoDB
* Firebase
* Authentication
* REST APIs
* External database
* Bootstrap

All typing passages are stored locally inside the React project.

---

## 💡 What I Learned

Building TypingSkill helped strengthen my understanding of:

* React component architecture
* React Hooks
* Custom Hooks
* State management
* Controlled inputs
* Keyboard event handling
* Timers with `useEffect`
* `useRef` for DOM interaction
* LocalStorage persistence
* Real-time calculations
* Responsive CSS
* Reusable components
* UI/UX design for interactive applications

---

## 🔮 Future Improvements

Possible future improvements include:

* User accounts
* Cloud-based progress synchronization
* Global leaderboards
* More typing languages
* Custom typing passages
* Advanced performance analytics
* Typing heatmaps
* Daily typing challenges
* Streak tracking
* Multiplayer typing races

---

## 👨‍💻 Author

**Sanju 💖**

Frontend Developer | React Developer

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

> **Keep typing. Keep improving.**
