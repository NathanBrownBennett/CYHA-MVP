CYHA-MVP 

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

1. Landing Page
Functional Requirements:

Welcome Banner: Must dynamically display engaging content with scrolling or animated text highlighting the app's mission.
Sign-In/Registration: Support sign-in and registration processes, including social media OAuth integration for convenience.
Quick Tour: Provide a short animation or carousel explaining key features of the app.
Non-Functional Requirements:

Usability: Ensure the landing page is intuitive and engaging for first-time users.
Performance: The page should load quickly, with dynamic content being served efficiently.
Security: Secure authentication mechanisms to protect user information during sign-in and registration.
2. Dashboard
Functional Requirements:

Navigation Menu: Implement a sidebar or bottom navigation with icons for main app areas.
Recent Activity Feed: Aggregate updates from followed networks, forums, etc.
Quick Access Tiles: Offer shortcuts to frequently used features.
Non-Functional Requirements:

Customizability: Allow users to customize the layout or the items in the quick access tiles.
Scalability: Ensure the dashboard can handle a growing number of user interactions and content feeds efficiently.
3. Authentication
Functional Requirements:

Sign-In Flow: Implement a sign-in process using Firebase, including handling account existences.
Registration Flow: Manage the registration process, including email verification and adding new user details to Firebase.
Non-Functional Requirements:

Security: Implement secure authentication processes, ensuring data protection and privacy.
Reliability: Ensure a reliable sign-in and registration process even under high load.
4. User Management
Functional Requirements:

User Preferences Storage: Store and manage user settings and customization preferences.
Profile Management: Allow users to view and edit their profile, including personal information and settings.
Non-Functional Requirements:

Privacy: Ensure user data is handled and stored securely, complying with GDPR and other relevant laws.
User Experience: Provide a smooth and intuitive interface for managing user settings and profiles.
5. Additional Functionalities
Functional Requirements:

Theme Toggling: Enable users to switch between light and dark modes.
Messages Screen: Support viewing message requests, composing new messages, and displaying all chats.
For You Page: Display recent polls and posts with prioritization based on likes.
Make Post Page: Allow users to create and share posts across their profile and the For You Page.
Non-Functional Requirements:

Accessibility: Ensure all functionalities are accessible, including theme toggling and messaging features.
Scalability: Design the system to efficiently handle increasing content and interactions over time.
General Non-Functional Requirements for the Entire App
Scalability: The app should efficiently manage growing amounts of data and users.
Performance: Ensure high performance, with quick loading times and responsive interactions.
Security: Adhere to best practices in security to protect user data and interactions.
Usability: The app should be intuitive and easy to use, with a focus on user experience.
Maintainability: Code should be well-documented and structured for easy maintenance and updates.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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
# CYHA-MVP
# CYHA-MVP
# CYHA-MVP
# CYHA-MVP
# CYHA-MVP
# CYHA-MVP
