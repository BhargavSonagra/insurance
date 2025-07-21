const insurancePlans = { 
  lifeInsurance: [
    {
      category: "Life Insurance",
      title: "Term Life Protection Plan",
      description: "Affordable coverage for a fixed term with a guaranteed payout to your beneficiaries.",
      detailedDescription: "This type of life insurance provides a set amount of coverage for a specific period (e.g., 10, 20, or 30 years). It’s generally more affordable than permanent insurance, and if the policyholder passes away during the term, the beneficiaries receive a guaranteed payout. However, it doesn't accumulate any cash value."
    },
    {
      category: "Life Insurance",
      title: "Whole Life Security Plan",
      description: "Lifelong protection that builds cash value over time with fixed premiums.",
      detailedDescription: "A whole life policy offers coverage for the insured's entire life as long as premiums are paid. It not only guarantees a death benefit but also accumulates cash value, which can be borrowed against or withdrawn. Premiums are typically fixed for the life of the policy."
    },
    {
      category: "Life Insurance",
      title: "Family Income Benefit Plan",
      description: "Provides monthly income to your loved ones in the event of your passing.",
      detailedDescription: "This policy provides a regular monthly income to the beneficiaries, rather than a lump sum. It's designed to help families maintain their lifestyle and cover ongoing living expenses after the death of the insured."
    },
    {
      category: "Life Insurance",
      title: "Senior Life Assurance Plan",
      description: "Final expense coverage tailored for individuals over 50, with no medical exam required.",
      detailedDescription: "This plan is focused on providing a death benefit to cover final expenses such as funeral costs and other end-of-life expenses. It’s available to individuals over 50 years old and often doesn’t require a medical exam, making it accessible for older individuals."
    },
    {
      category: "Life Insurance",
      title: "Child Future Planner",
      description: "Secure your child’s future with a policy that grows and converts to full coverage at age 18.",
      detailedDescription: "This plan is designed to start saving for a child’s future. It grows in value over time and can be converted into a full life insurance policy once the child turns 18, ensuring that coverage is available throughout their life."
    },
    {
      category: "Life Insurance",
      title: "Universal Life Protection Plan",
      description: "Flexible, lifelong protection with the option to adjust premiums and coverage.",
      detailedDescription: "Universal life insurance offers lifelong coverage with the flexibility to adjust your premiums and death benefit as your needs change over time. It also builds cash value, which can be borrowed against or used to pay premiums."
    }
  ],
  homeInsurance: [
    {
      category: "Home Insurance",
      title: "Standard Homeowners Plan",
      description: "Covers your home, personal belongings, and personal liability.",
      detailedDescription: "A basic homeowners insurance policy that protects the structure of your home, your personal belongings inside, and offers liability protection in case someone is injured on your property or if you cause damage to others."
    },
    {
      category: "Home Insurance",
      title: "Extended Replacement Coverage",
      description: "Pays full rebuild cost even if it exceeds your policy limits.",
      detailedDescription: "This policy ensures that if your home is damaged or destroyed, the insurance will pay for the cost of rebuilding your home, even if it exceeds your original coverage limit. This is especially important in the event of significant property inflation."
    },
    {
      category: "Home Insurance",
      title: "Natural Disaster Protection",
      description: "Adds protection against floods, earthquakes, and other natural events.",
      detailedDescription: "This coverage extends beyond basic home insurance to include protection against natural disasters such as floods, earthquakes, hurricanes, and tornadoes, which are typically not covered in standard policies."
    },
    {
      category: "Home Insurance",
      title: "Landlord Property Insurance",
      description: "Protects rental property, loss of rent, and landlord liability.",
      detailedDescription: "This plan is tailored for landlords who rent out properties. It covers the physical structure of the rental property, any rental income lost due to damage, and liability if a tenant or visitor is injured on the premises."
    },
    {
      category: "Home Insurance",
      title: "Home + Contents Value Pack",
      description: "Bundled protection for both your home and valuable personal belongings.",
      detailedDescription: "This plan combines coverage for the home structure and the contents inside, like furniture, electronics, and valuables. Bundling these protections into one package can be more affordable than purchasing them separately."
    },
    {
      category: "Home Insurance",
      title: "Luxury Home Protection",
      description: "Comprehensive protection for high-value homes and assets.",
      detailedDescription: "Designed for high-net-worth individuals, this insurance offers broader coverage for expensive homes, art collections, jewelry, and other high-value assets. It also covers unique risks that may not be included in standard policies."
    }
  ],
  carInsurance: [
    {
      category: "Car Insurance",
      title: "Basic Liability Plan",
      description: "Meets legal requirements and covers damage you cause to others.",
      detailedDescription: "This is the minimum required car insurance by law in most places. It covers bodily injury and property damage that you cause to other people in an accident, but it does not cover your own car or injuries."
    },
    {
      category: "Car Insurance",
      title: "Comprehensive Coverage",
      description: "Protects your car from theft, vandalism, fire, and weather events.",
      detailedDescription: "Comprehensive insurance covers damages to your vehicle that are not caused by a collision, such as theft, vandalism, fire, and weather-related events (like hail or floods). This provides broader protection than liability alone."
    },
    {
      category: "Car Insurance",
      title: "Collision Coverage",
      description: "Covers damage to your vehicle after an accident, regardless of fault.",
      detailedDescription: "This type of coverage covers the cost of repairs to your own vehicle after a collision, regardless of who was at fault. It's particularly helpful if you are involved in an accident where you’re the one to blame."
    },
    {
      category: "Car Insurance",
      title: "Full Coverage Auto Bundle",
      description: "Complete coverage: liability, collision, and comprehensive.",
      detailedDescription: "This plan bundles together liability, collision, and comprehensive coverage for a more complete insurance package. It offers protection in virtually all situations, including accidents, theft, and natural events."
    },
    {
      category: "Car Insurance",
      title: "Pay-As-You-Drive Plan",
      description: "Usage-based pricing ideal for low-mileage or occasional drivers.",
      detailedDescription: "This plan uses a telematics device or mobile app to track your driving behavior and mileage. It’s an ideal option for drivers who don’t drive often or have a low annual mileage. The premium is based on actual driving habits, potentially saving money for less frequent drivers."
    },
    {
      category: "Car Insurance",
      title: "Roadside Assistance Plan",
      description: "Emergency roadside assistance for vehicle breakdowns and emergencies.",
      detailedDescription: "This add-on covers the costs of emergency services like flat tire changes, jump-starts, and towing. Ideal for drivers who want peace of mind in case of unexpected car troubles."
    }
  ],
  businessInsurance: [
    {
      category: "Business Insurance",
      title: "Small Business Essentials",
      description: "General liability and property coverage designed for startups and local businesses.",
      detailedDescription: "This is a basic coverage plan designed to protect small businesses against common risks like property damage, customer injuries, or lawsuits. It’s essential for startups and small businesses to secure their operations."
    },
    {
      category: "Business Insurance",
      title: "Professional Liability Plan",
      description: "Covers errors, omissions, and negligence claims related to your services.",
      detailedDescription: "This insurance protects businesses that offer professional services against claims of negligence, errors, or omissions. It’s ideal for consultants, lawyers, accountants, and anyone offering specialized advice or services."
    },
    {
      category: "Business Insurance",
      title: "Commercial Property Insurance",
      description: "Protects buildings, equipment, inventory, and other business assets.",
      detailedDescription: "This coverage safeguards physical business assets, including the building, equipment, inventory, and other property. It protects against losses from theft, fire, or natural disasters."
    },
    {
      category: "Business Insurance",
      title: "Business Interruption Plan",
      description: "Covers lost income during unexpected closures due to disasters.",
      detailedDescription: "If a business has to temporarily close due to a covered event (like a fire or flood), this insurance compensates for the loss of income and helps pay for ongoing expenses, such as payroll and rent, during the downtime."
    },
    {
      category: "Business Insurance",
      title: "Comprehensive Business Owner's Policy",
      description: "Combines multiple coverages into a cost-effective, customizable package.",
      detailedDescription: "This plan bundles different types of coverage—such as general liability, property insurance, and business interruption—into a single policy. It's a convenient and cost-effective way for business owners to ensure all-around protection for their operations."
    },
    {
      category: "Business Insurance",
      title: "Cyber Liability Insurance",
      description: "Protection against data breaches and cyberattacks.",
      detailedDescription: "Cyber liability insurance helps businesses recover from losses due to cyberattacks, data breaches, and other digital threats. It covers things like customer notification, legal fees, and public relations costs after an incident."
    }
  ]
};

export default insurancePlans;
