# JobsForces: AI-Powered Career Development Platform

A comprehensive career development platform that leverages AI to help professionals advance their careers through personalized guidance, skill assessment, and job application tools.

![JobsForces Hero Image](./public/screenshots/hero-section.![Screenshot_20250329_163215](https://github.com/user-attachments/assets/1f15a6ea-5f1a-413c-92af-bc03dd134d17)
png)

## 🚀 Features

### AI Career Coaching
Your AI Career Coach for Professional Success - offering personalized guidance, interview preparation, and AI-powered tools to help users succeed in their job search and career advancement.



![Screenshot_20250329_163327](https://github.com/user-attachments/assets/4de1a053-e683-46a3-a7bb-ccdc2790bd35)

### Industry Insights
Access up-to-date market intelligence including:
- Market outlook metrics (e.g., "Positive")
- Industry growth statistics (e.g., 15.0% growth)
- Current demand levels for specific skills
- Top skills in demand (e.g., Solidity, Python, Ethereum, Cryptography, Data Structures)
- Detailed salary ranges by role with minimum, median, and maximum figures

![Industry Insights](./public/screenshots/industry-insights.png)![Screenshot_![Screenshot_20250329_163315](https://github.com/user-attachments/assets/712276bf-19b0-4017-9962-8eb895887af5)
20250329_163259](https://github.com/user-attachments/assets/fc288866-b562-4b3e-a861-4dffa5937849)


### Resume Builder
A structured resume building tool with:
- Both form-based and markdown editing options
- Comprehensive sections for contact information, professional summary, skills, work experience, education, and projects
- Options to save or download as PDF![Screenshot_20250329_163336](https://github.com/user-attachments/assets/25eeb264-63a7-40e8-b49e-f3e67e4b5dfd)

![Screenshot_20250329_163345](https://github.com/user-attachments/assets/b9f1af33-d6d0-464f-83aa-b30d6cde000c)
![Screenshot_20250329_163356](https://github.com/user-attachments/assets/5e792e03-714e-44f1-8898-7774616fbf76)

![Resume Builder](./public/screenshots/resume-builder.png)

### AI Cover Letter Creator
Create and manage multiple cover letters tailored to specific positions with:
- AI-generated templates based on your skills and the job description
- Customization tools to highlight relevant experience
- Export options for easy application submission

![Cover Letter Creator](./public/screenshots/cover-letter-creator.png)
![Screenshot_20250329_163413](https://github.com/user-attachments/assets/097057f5-a913-4a5a-acae-7f07626074b8)

![Screenshot_20250329_163420](https://github.com/user-attachments/assets/6b729256-b866-4a4d-a409-cdafb97372b5)

### Interview Preparation
Comprehensive interview prep features including:
- Mock interviews with industry-specific questions
- Knowledge testing through interactive quizzes
- Performance tracking and analysis
- Detailed question reviews with explanations of correct answers
- Improvement tips based on quiz performance![Screenshot_20250329_163430](https://github.com/user-attachments/assets/e91ed39c-01f4-46d6-8545-0e11282fb571)![Screenshot_20250329_163441](https://github.com/user-attachments/assets/a0758e25-7347-47b5-b9d3-87807b239850)

![Screenshot_20250329_163455](https://github.com/user-attachments/assets/e49c7027-ab1a-4dd5-9e33-304c4f0c4d62)
![Screenshot_20250329_163505](https://github.com/user-attachments/assets/3fd64ae5-fe43-47c5-9e59-b1efa1b53008)


![Interview Preparation](./public/screenshots/interview-prep.png)

### Skills Assessment
Technical assessments focused on user-specified skills, with support for various technologies including blockchain development (Solidity, Rust, Foundry), web development, data science, and more.


## 🛠️ Technologies

- **Frontend**: Next.js 15, React 18, Tailwind CSS
- **UI Components**: Radix UI, Lucide React icons
- **Authentication**: Clerk
- **AI Integration**: Google Generative AI
- **Database**: Prisma with database (type not specified)
- **Form Handling**: React Hook Form with Zod validation
- **Data Visualization**: Recharts
- **PDF Generation**: html2pdf.js
- **Data Fetching**: SWR
- **Background Jobs**: Inngest

## 🎯 Target Audience

JobsForces caters to technical professionals across various industries, with particular strength in supporting:
- Blockchain and Web3 developers
- Software engineers
- Data scientists
- Other technical roles

The platform is designed to be valuable for professionals at all career stages, from entry-level to senior positions.

## 📋 Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn
- Database setup (compatible with Prisma)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Lovjeet1233/AI_Coach_For_Skill_Growth.git
   cd AI_Coach_For_Skill_Growth
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Google AI API
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   
   # Database URL
   DATABASE_URL=your_database_connection_string
   
   # Add any other required environment variables
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 💼 User Experience

The JobsForces platform features a modern, dark-themed design with a clear navigation structure and gradient teal/blue typography for headings. Users can:

- Sign in with Google or email
- Create personalized profiles by specifying:
  - Industry
  - Years of experience
  - Skills
  - Professional background
- Access a personalized dashboard with career insights and recommendations
- Generate, edit, and manage professional documents
- Prepare for interviews and assess their skills


```bash
# Build the application
npm run build

# Start the production server
npm start
```




## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👥 Authors

- **Lovjeet** - [GitHub](https://github.com/Lovjeet1233)

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.dev/)
- [Google Generative AI](https://ai.google.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
