"use client";
import React, { useState } from "react";

const domainColors: Record<string, string> = {
  "FINTECH": "bg-[#FFF7F3]",
  "SAAS": "bg-[#F5F9FE]",
  "DATA": "bg-[#EFFCF7]",
  "LOGISTICS": "bg-[#FDFBED]",
  "RETAIL": "bg-[#FAFBF2]",
  "HEALTHCARE": "bg-[#FDF6FA]",
  "INSURTECH": "bg-[#F6FCFE]",
  "MEDIA": "bg-[#FFF9F2]",
  "GOVTECH": "bg-[#F7FCFF]",
  "MANUFACTURING": "bg-[#F7FAF9]",
  "AI": "bg-[#F7F6FF]",
  "M&A": "bg-[#FFF5F5]",
  "ENERGY": "bg-[#F5FCF2]",
  "TRAVEL": "bg-[#FFF9F2]",
  "EMPLOY": "bg-[#F7FBFF]"
};



// Cards data extracted from your attached image
const caseStudies = [
  {
    id: "cs-wealth-mvp",
    domain: "FINTECH",
    title: "Wealth Platform — MVP in 8 weeks",
    description:
      "B2B+ Healthcare+ MVP build. Modern WealthStack SaaS platform with analytics, onboarding, compliance.",
    tags: ["B2B", "Analytics", "SaaS", "Onboarding"],
    stats: [
      { label: "TAT", value: "8 WEEKS" },
      { label: "COST", value: "₹48L / MVP" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Start a similar MVP", href: "#" },
  },
  {
    id: "cs-features-saas",
    domain: "SAAS",
    title: "NextWise SaaS — Feature Accelerator",
    description:
      "Features delivered via API, onboarding, running user pilots and migrations.",
    tags: ["API", "Pilots", "Migration"],
    stats: [
      { label: "TAT", value: "6 WEEKS" },
      { label: "COST", value: "₹11L / PILOT" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Ship faster", href: "#" },
  },
  {
    id: "cs-pa-microservices",
    domain: "FINTECH",
    title: "Policy Aggregator — Microservices",
    description:
      "Microservices and API platform for integration, automations with backend systems.",
    tags: ["API", "Microservices", "Integration"],
    stats: [
      { label: "TAT", value: "10 WEEKS" },
      { label: "COST", value: "₹49L / YEAR" },
      { label: "OUTPUT", value: "2 PODs" },
    ],
    cta: { label: "Modernise policies", href: "#" },
  },
  {
    id: "cs-data-lake",
    domain: "DATA",
    title: "Data Lake — Snowflake",
    description:
      "Unified business logic layer, multi-cloud ingestion & analytics.",
    tags: ["Snowflake", "Multi-cloud", "Ingestion", "Analytics"],
    stats: [
      { label: "TAT", value: "16 WEEKS" },
      { label: "COST", value: "₹80L / PROJECT" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Scale data fast", href: "#" },
  },
  {
    id: "cs-knowledge-assistant",
    domain: "DATA",
    title: "Knowledge Assistant — RAG",
    description:
      "AI assistant for regulatory queries, search over documents, regulatory workflow automation.",
    tags: ["AI Assistant", "Regulatory", "Search"],
    stats: [
      { label: "TAT", value: "8 WEEKS" },
      { label: "COST", value: "₹16L / PILOT" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Pilot a safety AI", href: "#" },
  },
  {
    id: "cs-tech-dd",
    domain: "M&A",
    title: "Tech Due Diligence — Playbook",
    description:
      "Due diligence framework and API integration for tech team transitions in M&A.",
    tags: ["API", "Playbook", "Framework"],
    stats: [
      { label: "TAT", value: "3 WEEKS" },
      { label: "COST", value: "₹8L / AUDIT" },
      { label: "OUTPUT", value: "2 PODs" },
    ],
    cta: { label: "Run a fast DD", href: "#" },
  },
  {
    id: "cs-kyc-onboarding",
    domain: "DATA",
    title: "Unified KYC & Onboarding",
    description:
      "AI based onboarding, document processing, workflow orchestration.",
    tags: ["AI", "KYC", "Onboarding"],
    stats: [
      { label: "ACCURACY", value: "98.2%" },
      { label: "SPEED", value: "+50%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Accelerate onboarding", href: "#" },
  },
  {
    id: "cs-payment-reconciliation",
    domain: "FINTECH",
    title: "Reconciliation Bot",
    description: "AI bot for payment reconciliation and matching.",
    tags: ["Payment", "Match", "Bot"],
    stats: [
      { label: "SPEED", value: "+30%" },
      { label: "COST", value: "-20%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Tighten recon cycles", href: "#" },
  },
  {
    id: "cs-metering-billing",
    domain: "LOGISTICS",
    title: "Usage Metering & Billing",
    description: "System for usage tracking and automated billing.",
    tags: ["Billing", "Usage", "Automation"],
    stats: [
      { label: "SPEED", value: "+20%" },
      { label: "EFFICIENCY", value: "+8%" },
      { label: "OUTPUT", value: "2 PODs" },
    ],
    cta: { label: "Ship monetisation", href: "#" },
  },
  {
    id: "cs-cust360",
    domain: "SAAS",
    title: "Customer 360 — Analytics",
    description:
      "360 analytics for B2C, B2B clients, product, and journey metrics.",
    tags: ["B2C", "B2B", "Analytics"],
    stats: [
      { label: "SPEED", value: "+16%" },
      { label: "COST", value: "-18%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Unify your 360 AI", href: "#" },
  },
  {
    id: "cs-claims-triage",
    domain: "INSURTECH",
    title: "Claims Triage AI",
    description:
      "Severity scoring and rule explainable models for claims. API enabled.",
    tags: ["Claims", "API", "Explainable AI"],
    stats: [
      { label: "SPEED", value: "+22%" },
      { label: "ACCURACY", value: "+9%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Speed up claims", href: "#" },
  },
  {
    id: "cs-ehr-gateway",
    domain: "HEALTHCARE",
    title: "EHR Integration Gateway",
    description:
      "FHIR/HL7 gateway for medical integrations, APIs, and standards.",
    tags: ["FHIR", "HL7", "API", "Gateway"],
    stats: [
      { label: "INTEGRATIONS", value: "15+" },
      { label: "GATEWAYS", value: "11k" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Standardise data exchange", href: "#" },
  },
  {
    id: "cs-forecasting",
    domain: "RETAIL",
    title: "Demand Forecasting",
    description: "AI models forecasting with promotions & seasonality signals.",
    tags: ["Forecasting", "AI", "Retail"],
    stats: [
      { label: "SALES", value: "+21%" },
      { label: "COST", value: "-18%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Forecast with confidence", href: "#" },
  },
  {
    id: "cs-order-revamp",
    domain: "RETAIL",
    title: "Order Management Revamp",
    description: "AI for smart order management and real-time inventory sync.",
    tags: ["Order", "Inventory", "AI"],
    stats: [
      { label: "SPEED", value: "+32%" },
      { label: "ACCURACY", value: "+18%" },
      { label: "OUTPUT", value: "2 PODs" },
    ],
    cta: { label: "Modernise OMIS", href: "#" },
  },
  {
    id: "cs-route-opt",
    domain: "LOGISTICS",
    title: "Route Optimization",
    description:
      "Predictive, real-time optimisation with traffic, cost, weather inputs.",
    tags: ["Predictive", "Optimization", "Real-time"],
    stats: [
      { label: "COST", value: "-12%" },
      { label: "SLA", value: "98%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Cut miles, keep SLAs", href: "#" },
  },
  {
    id: "cs-digital-twin",
    domain: "LOGISTICS",
    title: "Warehouse Digital Twin",
    description: "Telemetry + simulation dashboards, staffing and monitoring.",
    tags: ["Telemetry", "Simulation", "Dashboards"],
    stats: [
      { label: "COST", value: "-15%" },
      { label: "SPEED", value: "+12%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Sense and optimise", href: "#" },
  },
  {
    id: "cs-evan-proofing",
    domain: "HEALTHCARE",
    title: "Evan Proofing at Scale",
    description: "Biotech decisioning, secure browser, and user dashboards.",
    tags: ["Biotech", "Secure", "Dashboards"],
    stats: [
      { label: "SPEED", value: "+19%" },
      { label: "COST", value: "-16%" },
      { label: "OUTPUT", value: "2 PODs" },
    ],
    cta: { label: "Boost field agents", href: "#" },
  },
  {
    id: "cs-otv-analytics",
    domain: "MEDIA",
    title: "OTV Analytics Platform",
    description: "One platform, cohort churn, and growth metrics.",
    tags: ["Analytics", "Platform", "Churn"],
    stats: [
      { label: "GROWTH", value: "+28%" },
      { label: "RETENTION", value: "+11%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Grow and retain AI", href: "#" },
  },
  {
    id: "cs-iot-ingestion",
    domain: "LOGISTICS",
    title: "IoT Time-Series Ingestion",
    description: "Gateway: TBs+ of millions of readings with stack analytics.",
    tags: ["IoT", "Ingestion", "Analytics"],
    stats: [
      { label: "COST", value: "-8%" },
      { label: "SPEED", value: "+6%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Stream at scale", href: "#" },
  },
  {
    id: "cs-grievance-analytics",
    domain: "HEALTHCARE",
    title: "Grievance Redressal Analytics",
    description: "AI/ML for case resolution, SLA hampers and dashboards.",
    tags: ["AI/ML", "Resolution", "Dashboards"],
    stats: [
      { label: "SPEED", value: "+28%" },
      { label: "COST", value: "-13%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Improve service SLAs", href: "#" },
  },
  {
    id: "cs-dynamic-pricing",
    domain: "RETAIL",
    title: "Dynamic Pricing Engine",
    description: "Elasticity aware price formation with ML signals.",
    tags: ["ML", "Elasticity", "Pricing"],
    stats: [
      { label: "PROFIT", value: "+16%" },
      { label: "COST", value: "-12%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Price with control", href: "#" },
  },
  {
    id: "cs-spc-quality",
    domain: "MANUFACTURING",
    title: "SPC & Quality Analytics",
    description: "Process control charts, alerts, and root-cause dashboards.",
    tags: ["Control", "Charts", "Dashboards"],
    stats: [
      { label: "LIFT", value: "+18%" },
      { label: "COST", value: "-14%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Lift first field ops", href: "#" },
  },
  {
    id: "cs-contact-call",
    domain: "AI",
    title: "Contact Center Call Summaries",
    description: "AI models for sentiment, intent, and best action analytics.",
    tags: ["AI", "Sentiment", "Intent", "Action"],
    stats: [
      { label: "LIFT", value: "+12%" },
      { label: "COST", value: "-7%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Upgrade agent assist", href: "#" },
  },
  {
    id: "cs-privacy-toolkit",
    domain: "DATA",
    title: "PDP/DPDPR Compliance Toolkit",
    description: "Config layers, PI discovery, and decision workflow.",
    tags: ["Compliance", "Privacy", "Decision"],
    stats: [
      { label: "COST", value: "-9%" },
      { label: "EFFICIENCY", value: "+5%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Operationalise privacy", href: "#" },
  },
  {
    id: "cs-credit-risk",
    domain: "FINTECH",
    title: "Credit Risk Scoring Service",
    description: "Segmented models with human-in-the-loop scorecards.",
    tags: ["Segmentation", "Scorecard", "Risk"],
    stats: [
      { label: "COST", value: "-19%" },
      { label: "SCORE", value: "+39%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Scores with confidence", href: "#" },
  },
  {
    id: "cs-feature-flags",
    domain: "SAAS",
    title: "Feature Flags Platform Migration",
    description:
      "Migration to new workspace using SaaS and API-led architecture.",
    tags: ["Feature Flags", "API", "Migration"],
    stats: [
      { label: "COST", value: "-20%" },
      { label: "SPEED", value: "+13%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Ship safely", href: "#" },
  },
  {
    id: "cs-care-pathways",
    domain: "HEALTHCARE",
    title: "Care Pathways Analytics",
    description: "Care touchpoints, LOS drivers, and outcomes analytics.",
    tags: ["LOS", "Drivers", "Outcomes"],
    stats: [
      { label: "COST", value: "-14%" },
      { label: "RETENTION", value: "+8%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Protect the thesis", href: "#" },
  },
  {
    id: "cs-loyalty-redesign",
    domain: "RETAIL",
    title: "Loyalty Program Redesign",
    description: "Expand loyalty drivers, winbacks, and reward analytics.",
    tags: ["Loyalty", "Rewards", "Analytics"],
    stats: [
      { label: "GROWTH", value: "+14%" },
      { label: "RETENTION", value: "+6%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Boost loyalty", href: "#" },
  },
  {
    id: "cs-agent-pwa",
    domain: "AI",
    title: "Agent Portal — PWA",
    description: "Offline credentials, camera, KYC, and local validation.",
    tags: ["PWA", "Offline", "Camera"],
    stats: [
      { label: "COST", value: "-10%" },
      { label: "SPEED", value: "+8%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Empower field agents", href: "#" },
  },
  {
    id: "cs-cost-dd",
    domain: "M&A",
    title: "Cloud Cost Due Diligence",
    description: "Cloud cost benchmarking, audits, and spend analysis.",
    tags: ["Cloud", "Cost", "DD"],
    stats: [
      { label: "COST", value: "-20%" },
      { label: "BENCHMARK", value: "+12%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Protect spend", href: "#" },
  },
  {
    id: "cs-marketing-copilot",
    domain: "AI",
    title: "Marketing Copilot",
    description: "Brand-safe content with retrieval checks and scorecards.",
    tags: ["Content", "Scorecard", "AI"],
    stats: [
      { label: "SCORE", value: "+33%" },
      { label: "LIFT", value: "+14%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Scale content safely", href: "#" },
  },
  {
    id: "cs-kafka-stream",
    domain: "DATA",
    title: "Streaming Platform (Kafka)",
    description: "Topics, partitions, stream replay, and fault tolerance.",
    tags: ["Kafka", "Streaming", "Fault Tolerance"],
    stats: [
      { label: "COST", value: "-16%" },
      { label: "SPEED", value: "+11%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Unlock eventing", href: "#" },
  },
  {
    id: "cs-citizen-offline",
    domain: "GOVTECH",
    title: "Citizen Services — Offline First",
    description: "UX for scale, conflict resolution, and bilingual support.",
    tags: ["Offline", "UX", "Bilingual"],
    stats: [
      { label: "COST", value: "-8%" },
      { label: "SPEED", value: "+9%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Reach everyone", href: "#" },
  },
  {
    id: "cs-chat-booking",
    domain: "TRAVEL",
    title: "Chat-based Booking Assistant",
    description: "AI bot for rooms, fares, and notifications.",
    tags: ["Bot", "Booking", "AI"],
    stats: [
      { label: "EFFICIENCY", value: "+21%" },
      { label: "COST", value: "-19%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Delight with chat", href: "#" },
  },
  {
    id: "cs-predictive-maint",
    domain: "MANUFACTURING",
    title: "Predictive Maintenance",
    description: "Edge forecasting, service triggers, fault reduction.",
    tags: ["Edge", "Forecasting", "Service"],
    stats: [
      { label: "REDUCTION", value: "+12%" },
      { label: "FAULT", value: "-9%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Prevent failures", href: "#" },
  },
  {
    id: "cs-carbon-dashboard",
    domain: "ENERGY",
    title: "Carbon Emissions Dashboard",
    description: "AI for tracking, factors, and reduction dashboard.",
    tags: ["Emissions", "Dashboard", "AI"],
    stats: [
      { label: "REDUCTION", value: "+26%" },
      { label: "COST", value: "-21%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Make it measurable", href: "#" },
  },
  {
    id: "cs-ad-yield-opti",
    domain: "MEDIA",
    title: "Ad Yield Optimization",
    description: "Intelligent bidding, floor price swing, and trend analysis.",
    tags: ["Bidding", "Price", "Yield", "Trend"],
    stats: [
      { label: "YIELD", value: "+18%" },
      { label: "BID", value: "+8%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Grow ad yield", href: "#" },
  },
  {
    id: "cs-engagement-analytics",
    domain: "EMPLOY",
    title: "Engagement Analytics",
    description: "Cohorts, mastery paths, and instructor analytics.",
    tags: ["Cohorts", "Mastery", "Analytics"],
    stats: [
      { label: "SCORE", value: "+13%" },
      { label: "ENGAGEMENT", value: "+14%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Elevate learning", href: "#" },
  },
  {
    id: "cs-pop-health",
    domain: "HEALTHCARE",
    title: "Population Health Explorer",
    description: "Risk stratification, SDOH overlays, and analytics.",
    tags: ["SDOH", "Risk Strat", "Analytics"],
    stats: [
      { label: "TARGET", value: "95%" },
      { label: "COST", value: "-9%" },
      { label: "OUTPUT", value: "1 POD" },
    ],
    cta: { label: "Target impact", href: "#" },
  },
];

// All domains for filter chips
const allDomains = [
  "All",
  "AI",
  "Data",
  "Fintech",
  "Energy",
  "GovTech",
  "Healthcare",
  "InsurTech",
  "Logistics",
  "M&A",
  "Manufacturing",
  "Media",
  "Retail",
  "SaaS",
  "Travel",
  "Employ",
];

interface outcomesProps {
  id?: string;
}

const CaseStudies = ({ id }: outcomesProps) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Filter and search logic
  const filteredCards = caseStudies.filter((card) => {
    const matchesFilter =
      filter === "All" || card.domain?.toLowerCase() === filter.toLowerCase();
    const matchesSearch =
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div id={id} className="w-full pt-8 pb-12 bg-[#fafbfc] min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-8 ">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-6xl mb-2 text-gray-900">
          Case studies
        </h1>
        <p className="text-gray-700 text-base mb-3">
          Flagship transformations with quantified impact and clear governance.
          Filter by domain or search by keyword.
        </p>
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-3">
          {allDomains.map((domain) => (
            <button
              key={domain}
              onClick={() => setFilter(domain)}
              className={`px-3 py-1 rounded-full cursor-pointer text-xs font-semibold border border-gray-300 ${
                filter === domain
                  ? "bg-[#3686FD] text-white border-primary"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
        {/* Search Input */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3686FD] text-sm mb-4"
          placeholder="Search case studies..."
        />
        {/* Stats */}
        <div className="font-medium text-xs my-2 text-gray-500">
          {filteredCards.length} cases shown
        </div>
      </div>
      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       {filteredCards.map(card => {
  const colors = domainColors[card.domain] || "bg-white";
  return (
    <div
      key={card.id}
      className={`rounded-xl shadow-lg ${colors} flex flex-col justify-between p-4 transition hover:scale-[1.02] hover:shadow-xl`}
    >
      <div>
        <div className="uppercase tracking-wide text-xs font-bold mb-2"
          style={{
            color: card.domain === "FINTECH" ? "#FF7436"
              : card.domain === "SAAS" ? "#468CF3"
              : card.domain === "DATA" ? "#1EC98F"
              : card.domain === "LOGISTICS" ? "#EBC122"
              : card.domain === "RETAIL" ? "#9BC407"
              : card.domain === "HEALTHCARE" ? "#ED57C7"
              : card.domain === "INSURTECH" ? "#42AADA"
              : card.domain === "MEDIA" ? "#F8A642"
              : card.domain === "GOVTECH" ? "#49A3D8"
              : card.domain === "MANUFACTURING" ? "#78B9AD"
              : card.domain === "AI" ? "#8A7FF9"
              : card.domain === "M&A" ? "#D94242"
              : card.domain === "ENERGY" ? "#85D02D"
              : card.domain === "TRAVEL" ? "#F0A202"
              : card.domain === "EMPLOY" ? "#2F80ED"
              : "#4971C5"
          }}
        >
          {card.domain}
        </div>
        <div className="font-semibold text-lg text-gray-900 mb-1">
          {card.title}
        </div>
        <div className="text-gray-600 text-sm mb-3">
          {card.description}
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {card.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-500 border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Stats */}
      <div className="flex flex-wrap gap-3 text-[13px] font-semibold mt-1 mb-2">
        {card.stats.map(stat => (
          <div
            key={stat.label}
            className="bg-white/60 rounded-lg px-2 py-1 text-gray-800 font-bold"
          >
            {stat.label}: <span className="font-normal">{stat.value}</span>
          </div>
        ))}
      </div>
      {/* CTA */}
      <a
        href={card.cta.href}
        className={`mt-4 inline-block text-sm font-semibold underline underline-offset-2 transition-colors cursor-pointer
        ${card.domain === "FINTECH" ? "text-[#FF7436]"
          : card.domain === "SAAS" ? "text-[#468CF3]"
          : card.domain === "DATA" ? "text-[#1EC98F]"
          : card.domain === "LOGISTICS" ? "text-[#EBC122]"
          : card.domain === "RETAIL" ? "text-[#9BC407]"
          : card.domain === "HEALTHCARE" ? "text-[#ED57C7]"
          : card.domain === "INSURTECH" ? "text-[#42AADA]"
          : card.domain === "MEDIA" ? "text-[#F8A642]"
          : card.domain === "GOVTECH" ? "text-[#49A3D8]"
          : card.domain === "MANUFACTURING" ? "text-[#78B9AD]"
          : card.domain === "AI" ? "text-[#8A7FF9]"
          : card.domain === "M&A" ? "text-[#D94242]"
          : card.domain === "ENERGY" ? "text-[#85D02D]"
          : card.domain === "TRAVEL" ? "text-[#F0A202]"
          : card.domain === "EMPLOY" ? "text-[#2F80ED]"
          : "text-[#4971C5]"
        }`}
      >
        {card.cta.label} &rarr;
      </a>
    </div>
  );
})}


        {filteredCards.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-8 font-semibold">
            No case studies found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
