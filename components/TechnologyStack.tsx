'use client'

import { motion } from 'framer-motion'

const techCategories = [
  {
    title: 'Frontend Development',
    items: [
      'Next.js (React-based, server-side rendering)',
      'Tailwind CSS, Material UI',
      'TypeScript',
      'React Context, Zustand, Redux',
      'Framer Motion, React Hook Form',
    ],
  },
  {
    title: 'Backend Development',
    items: [
      'Node.js',
      'NestJS, Express.js',
      'TypeScript',
      'RESTful APIs, GraphQL',
      'PostgreSQL, MongoDB, Redis',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'AWS, Vercel, Azure',
      'GitHub Actions, GitLab CI, Jenkins',
      'Docker, Kubernetes',
      'Terraform, CloudFormation',
      'Datadog, New Relic, Sentry',
    ],
  },
  {
    title: 'AI & Machine Learning',
    items: [
      'TensorFlow, PyTorch, Hugging Face',
      'MLflow, Kubeflow',
      'AWS SageMaker, Google Cloud AI, Azure ML',
      'OpenAI API, Anthropic Claude, LangChain',
    ],
  },
  {
    title: 'Development Tools',
    items: [
      'Git, GitHub, GitLab',
      'ESLint, Prettier, SonarQube',
      'Jest, Cypress, Playwright',
      'Swagger, Storybook',
    ],
  },
]

export default function TechnologyStack() {
  return (
    <section className="section-container bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title gradient-text">
          Technology Stack
        </h2>
        <p className="section-subtitle">
          Modern tools and frameworks for superior results
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card bg-white"
          >
            <h3 className="text-xl font-bold mb-4 text-secondary">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-gray-700">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

