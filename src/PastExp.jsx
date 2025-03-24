import React from "react";
import { motion } from "framer-motion";

const PastExp = () => {
  const projects = [
    {
      title: "Seamless DynamoDB Migration & Automation",
      tech: ["Python", "AWS DynamoDB", "Step Functions", "Lambda", "CI/CD"],
      tasks: [
        "Enabled automated cross-account data transfer for testing.",
        "Implemented backup, transfer, and restore using Step Functions & Lambda.",
        "Integrated CI/CD pipeline for efficiency.",
      ],
    },
    {
      title: "Advanced S3 File Security & Management",
      tech: ["AWS Lambda", "S3", "ClamAV"],
      tasks: [
        "Automated virus scanning for every S3 file upload.",
        "Quarantined infected files & securely stored clean files.",
        "Enhanced security and optimized storage solutions.",
      ],
    },
    {
      title: "Automated Branch Restrictions for Bitbucket",
      tech: ["Bitbucket API", "Python"],
      tasks: [
        "Developed automation to enforce branch security policies.",
        "Maintained compliance using structured configuration files.",
      ],
    },
    {
      title: "Smart Lambda Concurrency Optimization",
      tech: ["AWS Lambda", "CodeBuild", "Bash Scripting"],
      tasks: [
        "Dynamically adjusted Lambda concurrency based on demand.",
        "Optimized resource utilization and response time.",
      ],
    },
    {
      title: "Intelligent API Connectivity for Fund Management",
      tech: ["Power Automate", "Python", "Appian", "MuleSoft"],
      tasks: [
        "Streamlined API integration across multiple SaaS applications.",
        "Enhanced workflow automation, reducing manual errors.",
      ],
    },
    {
      title: "Effortless Azure Stack HCI Migration",
      tech: ["Microsoft Azure HCI Stack"],
      tasks: [
        "Migrated VMware-based systems to Azure HCI.",
        "Achieved cost savings and improved hybrid cloud efficiency.",
      ],
    },
    {
      title: "Scalable Citrix VDI Deployment",
      tech: ["Citrix Hybrid VDI (On-Prem & Azure Cloud)"],
      tasks: [
        "Designed and implemented Citrix VDI across 13 African locations.",
        "Enabled secure remote access while reducing infrastructure costs.",
      ],
    },
  ];

  return (
    <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Glowing Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent animate-pulse"></div>

      <div className="container mx-auto px-6 space-y-6 relative">
        {/* Glowing Past Performance Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <h4 className="text-lg font-semibold w-fit mx-auto px-8 pb-4 uppercase tracking-wider glow-text">
            Past Performance
          </h4>
          <h2 className="text-4xl font-bold text-green-300 glow-strong">
            Innovations We Have Delivered
          </h2>
        </motion.div>

        {/* Experience Cards with Hover & Glow Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 transform transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-green-500/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500 opacity-10 blur-lg scale-125 hidden group-hover:block transition-all duration-500"></div>

              <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition duration-300">
                {item.title}
              </h3>

              <ul className="mt-3 space-y-1">
                {item.tech.map((tech, idx) => (
                  <li key={idx} className="inline-block text-xs bg-green-700/20 text-green-400 px-2 py-1 rounded-md mr-2">
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                {item.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400">✔</span> {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action for Clients */}
        <div className="text-center mt-8 text-gray-300">
          <p>
            Want to collaborate?{" "}
            <a
              href="#"
              className="text-green-400 font-semibold hover:underline hover:text-green-500 transition duration-300"
            >
              Let's connect!
            </a>
          </p>
        </div>
      </div>

      {/* Custom CSS for Glowing Effect */}
      <style>
        {`
          /* Glowing Text */
          .glow-text {
            text-shadow: 0 0 10px #22c55e, 0 0 20px #16a34a, 0 0 30px #15803d;
            animation: glow 1.5s infinite alternate;
          }

          @keyframes glow {
            from {
              text-shadow: 0 0 15px #22c55e, 0 0 25px #16a34a, 0 0 35px #15803d;
            }
            to {
              text-shadow: 0 0 20px #16a34a, 0 0 30px #22c55e, 0 0 40px #1a7f3a;
            }
          }

          /* Stronger Glow for Title */
          .glow-strong {
            text-shadow: 0 0 20px #22c55e, 0 0 30px #16a34a, 0 0 40px #15803d;
            animation: glow-strong 2s infinite alternate;
          }

          @keyframes glow-strong {
            from {
              text-shadow: 0 0 25px #22c55e, 0 0 35px #16a34a, 0 0 45px #15803d;
            }
            to {
              text-shadow: 0 0 30px #16a34a, 0 0 40px #22c55e, 0 0 50px #1a7f3a;
            }
          }
        `}
      </style>
    </section>
  );
};

export default PastExp;
