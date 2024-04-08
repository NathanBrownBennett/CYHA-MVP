# CYHA-MVP

```

                                                                                                                                                                                                                
                                                                                                                                                                                                                
        CCCCCCCCCCCCCYYYYYYY       YYYYYYYHHHHHHHHH     HHHHHHHHH               AAA                                          MMMMMMMM               MMMMMMMMVVVVVVVV           VVVVVVVVPPPPPPPPPPPPPPPPP        
     CCC::::::::::::CY:::::Y       Y:::::YH:::::::H     H:::::::H              A:::A                                         M:::::::M             M:::::::MV::::::V           V::::::VP::::::::::::::::P       
   CC:::::::::::::::CY:::::Y       Y:::::YH:::::::H     H:::::::H             A:::::A                                        M::::::::M           M::::::::MV::::::V           V::::::VP::::::PPPPPP:::::P      
  C:::::CCCCCCCC::::CY::::::Y     Y::::::YHH::::::H     H::::::HH            A:::::::A                                       M:::::::::M         M:::::::::MV::::::V           V::::::VPP:::::P     P:::::P     
 C:::::C       CCCCCCYYY:::::Y   Y:::::YYY  H:::::H     H:::::H             A:::::::::A                                      M::::::::::M       M::::::::::M V:::::V           V:::::V   P::::P     P:::::P     
C:::::C                 Y:::::Y Y:::::Y     H:::::H     H:::::H            A:::::A:::::A                                     M:::::::::::M     M:::::::::::M  V:::::V         V:::::V    P::::P     P:::::P     
C:::::C                  Y:::::Y:::::Y      H::::::HHHHH::::::H           A:::::A A:::::A                                    M:::::::M::::M   M::::M:::::::M   V:::::V       V:::::V     P::::PPPPPP:::::P      
C:::::C                   Y:::::::::Y       H:::::::::::::::::H          A:::::A   A:::::A              ---------------      M::::::M M::::M M::::M M::::::M    V:::::V     V:::::V      P:::::::::::::PP       
C:::::C                    Y:::::::Y        H:::::::::::::::::H         A:::::A     A:::::A             -:::::::::::::-      M::::::M  M::::M::::M  M::::::M     V:::::V   V:::::V       P::::PPPPPPPPP         
C:::::C                     Y:::::Y         H::::::HHHHH::::::H        A:::::AAAAAAAAA:::::A            ---------------      M::::::M   M:::::::M   M::::::M      V:::::V V:::::V        P::::P                 
C:::::C                     Y:::::Y         H:::::H     H:::::H       A:::::::::::::::::::::A                                M::::::M    M:::::M    M::::::M       V:::::V:::::V         P::::P                 
 C:::::C       CCCCCC       Y:::::Y         H:::::H     H:::::H      A:::::AAAAAAAAAAAAA:::::A                               M::::::M     MMMMM     M::::::M        V:::::::::V          P::::P                 
  C:::::CCCCCCCC::::C       Y:::::Y       HH::::::H     H::::::HH   A:::::A             A:::::A                              M::::::M               M::::::M         V:::::::V         PP::::::PP               
   CC:::::::::::::::C    YYYY:::::YYYY    H:::::::H     H:::::::H  A:::::A               A:::::A                             M::::::M               M::::::M          V:::::V          P::::::::P               
     CCC::::::::::::C    Y:::::::::::Y    H:::::::H     H:::::::H A:::::A                 A:::::A                            M::::::M               M::::::M           V:::V           P::::::::P               
        CCCCCCCCCCCCC    YYYYYYYYYYYYY    HHHHHHHHH     HHHHHHHHHAAAAAAA                   AAAAAAA                           MMMMMMMM               MMMMMMMM            VVV            PPPPPPPPPP               
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                
                                                                                                                                                                                                                

```

You can view the UML diagram for the flow of this application in "public/diagram for CYH.png"
![diagram for CYH](https://github.com/NathanBrownBennett/CYHA-MVP/assets/46282855/c910fdf1-dc6e-44ba-9f29-e5f370cc8950)
```
= SPEC-01: Commonwealth Youth Hub App (CYHA MVP) Architecture
:sectnums:
:toc:

== Background

The Commonwealth Youth Hub App (CYHA MVP) is envisioned as a pioneering platform to empower the youth by facilitating collaboration, communication, and community-driven initiatives. This application seeks to merge the interactive elements of popular social platforms to establish a singular space for youths to network, exchange ideas, and participate in community projects.

The primary target audience encompasses young individuals across the Commonwealth nations who are keen to use technology for social betterment, community development, and personal advancement. CYHA MVP is committed to addressing the fragmentation in communication channels for youth, providing an integrated environment for dialogue, project coordination, and implementation.

The app will fill a critical void in accessible, youth-centered platforms that advocate for community projects, networking, and self-improvement. The planned use of front-end technology like React is to ensure a dynamic and responsive user interface, while Firebase is chosen for robust authentication and real-time data synchronization.

Non-functional requirements are defined with a focus on usability, ensuring the platform is intuitive and engaging for newcomers, high performance with quick load times, and strict security protocols to protect user data and privacy.
```


```
== Requirements
```

```
=== Landing Page

.Must Have
* `+WelcomeBanner()`: Implement a dynamic welcome banner displaying engaging content with animations or scrolling text that introduces the app's mission.
* `+SignIn()`: Provide a sign-in method supporting traditional and social media OAuth integration.
* `+Register()`: Offer a registration method for new users, including account creation and verification.
* `+QuickTour()`: Include a method for a short, interactive tour explaining the app's key features for first-time users.

.Should Have
* Ensure the landing page is intuitive and engaging, promoting user retention from the first visit.
* Facilitate seamless navigation from the Landing Page to Authentication and Dashboard sections as per the UML diagram.

.Could Have
* Interactive elements such as pop-ups or guides that detail new features or highlight community projects.

.Won't Have
* Complicated backend logic on the landing page that may affect the page's load time and performance.
```
```
=== Dashboard

.Must Have
* `+NavigationMenu()`: Develop a sidebar or bottom navigation menu with icons to represent the main areas of the application, facilitating ease of access.
* `+RecentActivityFeed()`: Aggregate and display updates from followed networks, forums, or groups, providing users with recent activity at a glance.
* `+QuickAccessTiles()`: Implement shortcut tiles to frequently used features to enhance the user experience and app efficiency.

.Should Have
* Provide users the ability to customize their dashboard layout or the items included in the quick access tiles, supporting a personalized experience.
* Ensure the dashboard can efficiently scale and manage an increasing volume of user interactions and content without performance degradation.

.Could Have
* Integrate algorithms that curate the recent activity feed based on the user's behavior and preferences to deliver more personalized content.

.Won't Have
* Overly complex widgets or features that may clutter the dashboard and detract from the core user experience.
```
```
=== Authentication

.Must Have
* `+SignInWithFirebase()`: Implement a secure, streamlined sign-in process with Firebase authentication, including social media integrations and account existence checks.
* `+RegisterUser()`: Create a robust registration process with email verification and detail management in Firebase.

.Should Have
* Ensure data protection and privacy throughout the authentication process, adhering to industry-standard security practices.
* Maintain reliability and consistency in the sign-in and registration process, even under high demand.

.Could Have
* Explore additional security measures like biometric verification or two-factor authentication to further protect user accounts.

.Won't Have
* Complex or time-consuming authentication steps that could negatively impact the user experience.
```
```
=== User Management

.Must Have
* `+ManageUserPreferences()`: Develop a system to store, manage, and retrieve user preferences and settings to personalize the user experience.
* Profile editing methods that allow users to manage their personal information and app settings easily.

.Should Have
* A streamlined interface for user settings management that aligns with an excellent user experience and intuitive navigation.
* Strict adherence to data privacy laws and regulations, ensuring user information is securely handled and stored.

.Could Have
* Integration capabilities with external services to offer users a more comprehensive profile management experience.

.Won't Have
* Overly detailed or complex user settings that might overwhelm users and detract from the usability of the app.
```
```
=== Additional Functionalities

.Must Have
* `+ToggleTheme()`: Facilitate a feature to switch between a light and dark theme, enhancing visual comfort for users.
* Messages Screen functions including `+ViewMessageRequests()`, `+ComposeNewMessage()`, and `+DisplayChats()` to handle all aspects of user communication within the app.
* For You Page features such as `+ShowRecentPollsAndPosts()` and `+PrioritizePostsByLikes()` to curate a dynamic and engaging content feed.
* Make Post Page methods `+CreatePost()` and `+SharePost()` that empower users to generate and disseminate content across the platform.

.Should Have
* Ensure the entire application is accessible, with consideration for users with disabilities, fulfilling ADA compliance.
* Design the app's architecture for scalability, effectively managing a growing user base and content.

.Could Have
* Notification systems for new messages and content updates to keep users engaged and informed.

.Won't Have
* Additional functionalities that could negatively impact the app's core performance metrics or introduce potential security risks.
```

== Implementation
<img width="1336" alt="CYHA architecture and interactions" src="https://github.com/NathanBrownBennett/CYHA-MVP/assets/46282855/2368ce15-0930-47de-9431-8e52d466fe4f">
Architecture & Integration image

```
=== Frontend Implementation Steps
```

.Setup Development Environment
* Install Node.js and npm to manage the project dependencies.
* Set up Visual Studio Code (VSCode) as the Integrated Development Environment (IDE) with extensions for React development (e.g., ESLint, Prettier, and Babel JavaScript).
* Initialize a new React project using Create React App for boilerplate setup.

.Implement User Interface Components
* Develop the `Landing Page` with React components for the Welcome Banner, Sign-In, Register, and Quick Tour functionalities.
* Create the `Dashboard` component with subcomponents for the Navigation Menu, Recent Activity Feed, and Quick Access Tiles.
* Construct the `Make Post Page`, `Messages Screen`, `User Profile Page`, and `For You Page` as separate React components following the requirements outlined earlier.

.Integrate with Backend Services
* Utilize Firebase SDK to integrate Authentication in the Sign-In and Registration components.
* Implement state management using React Context or Redux to manage user sessions and data throughout the application.
* Connect the `Dashboard` and other components to Firebase Firestore to read and write data as required.

.Implement Routing
* Set up React Router for navigation between different components/pages within the app.
* Ensure that the routing is intuitive and aligns with the user flow depicted in the UML diagram.

.Testing and Quality Assurance
* Write unit and integration tests using Jest and React Testing Library to ensure components function as expected.
* Perform user interface testing with a group of beta testers to gather feedback on usability and experience.
* Optimize performance and loading times using tools like Lighthouse and Webpack Bundle Analyzer.

.Deployment
* Prepare the production build of the React application using `npm run build`.
* Deploy the application to a suitable web hosting service, considering Firebase Hosting as an initial option for seamless integration.

.Documentation
* Document the usage of each component and the expected data flow between them.
* Maintain an updated README file with setup instructions, dependencies, and deployment steps.

.Maintenance Plan
* Establish a process for regular updates and dependency management to keep the application secure and up-to-date.
* Set up Continuous Integration/Continuous Deployment (CI/CD) pipelines to automate testing and deployment processes.

This implementation plan is designed to guide developers through the process of building the front-end part of the CYHA MVP. The steps are laid out sequentially, ensuring a systematic approach from environment setup to deployment and maintenance.

```
=== Backend Implementation Steps
```

.Setup Firebase Project
* Create a new project in the Firebase console.
* Configure Firebase Authentication to support email/password and social providers as required.
* Initialize Firebase Firestore with initial collections: Users, Posts, Messages, and Preferences.

.Implement Authentication Service
* Use Firebase Authentication SDK to implement sign-in, sign-up, and user session management.
* Secure user endpoints with Firebase Security Rules.

.Setup User Management Service
* Implement functionality to handle user profile creation, updates, and preference management using Firestore.
* Ensure GDPR compliance by adding the necessary privacy and data handling features.

.Configure Post Management Service
* Create functions to handle the creation, updating, and retrieval of posts within the Firestore.
* Implement algorithms for post prioritization and ranking in the For You Page feed.

.Develop Messaging Service
* Use Firestore or Firebase Realtime Database to implement real-time messaging capabilities.
* Implement logic for message requests, composing, and displaying chat histories.

.Implement Additional Functionalities
* Add theme toggling functionality by storing user preferences in Firestore.
* Ensure that additional features meet accessibility and scalability requirements.

.Setup Cloud Functions (if required)
* Utilize Firebase Cloud Functions for any backend logic that cannot be handled directly by Firestore triggers or client-side logic.

.Testing and Quality Assurance
* Write automated tests for each service to ensure they are performing as expected.
* Test security rules extensively to prevent unauthorized access and data breaches.

.Deployment
* Deploy cloud functions and set up database indexes and rules through Firebase CLI.
* Ensure backend services are properly versioned and monitored using Firebase tools.

.Documentation
* Document the backend architecture and each service's endpoints and functionalities.
* Provide clear instructions for maintenance and scaling considerations.

.Maintenance Plan
* Monitor backend performance using Firebase Analytics and adapt Firestore indexes as needed.
* Regularly review and update Firebase Security Rules and cloud function dependencies.

This plan provides a structured approach to building and deploying the backend for CYHA MVP using Firebase services. Each step ensures that the backend will be scalable, secure, and maintainable.












```
NPM Notes
```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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
# CYHA-MVP
