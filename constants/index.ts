import { CodeBracketSquareIcon, QrCodeIcon } from '@heroicons/react/20/solid'
import {  ArrowSmallRightIcon, CodeBracketIcon, ComputerDesktopIcon, RectangleStackIcon } from '@heroicons/react/24/outline'



export const navlinks = [
    {
      name: "HTML",
      href: "/html",
    },
    {
      name: "CSS",
      href: "/css",
    },
    {
      name: "NEXTJS",
      href: "/nextjs",
    },
    {
      name: "TYPESCRIPT",
      href: "/typescript",
    },
    {
      name: "JAVASCRIPT",
      href: "/javaScript",
    },
    {
      name: "REACT",
      href: "/react",
    },
  ];


  export const features = [
    {
      name: 'JavaScript',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CodeBracketIcon,
    },
    {
      name: 'TypeScript',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'HTML',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: QrCodeIcon,
    },
    {
      name: 'CSS',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: ComputerDesktopIcon,
    },  {
      name: 'React',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: RectangleStackIcon,
    },  {
      name: 'NextJs',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: ArrowSmallRightIcon,
    },
  ]
  

  export const quiz = {
    totalQuestions: 5,
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        answers: ['Madrid', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 'Paris',
      },
      {
        id: 2,
        question: 'What is the largest planet in our solar system?',
        answers: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctAnswer: 'Jupiter',
      },
      {
        id: 3,
        question: 'What is the smallest country in the world?',
        answers: ['Monaco', 'Maldives', 'Vatican City', 'San Marino'],
        correctAnswer: 'Vatican City',
      },
      {
        id: 4,
        question: 'What is the most widely spoken language in the world?',
        answers: ['English', 'Mandarin', 'Spanish', 'Hindi'],
        correctAnswer: 'Mandarin',
      },
      {
        id: 5,
        question: 'Who is the founder of Microsoft?',
        answers: ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
        correctAnswer: 'Bill Gates',
      },
    ],
  };
  