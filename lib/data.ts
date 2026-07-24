import type { Injury, CommunityLink } from "./types";

export const INJURIES: Injury[] = [
  {
    slug: "acl-tear",
    name: "ACL Tear",
    body_part: "Knee",
    severity: "Severe",
    recovery_time: "6-9 months",
    tagline: "The comeback journey for a torn anterior cruciate ligament.",
    description:
      "The anterior cruciate ligament (ACL) stabilizes the knee during cutting and pivoting movements. A tear commonly happens during sudden stops, changes in direction, or awkward landings. There are surgical and non-surgical approaches to recovery and the route you take depends on activity level, age, symptoms, and long-term goals. Most teens will go the surgical route and the recovery road map for ACL reconstruction surgery is down below. Even then, there are still many decisions to make such as what graft to get and when to get surgery.",
    thumbnail:
      "https://images.pexels.com/photos/29807420/pexels-photo-29807420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    phases: [
      {
        title: "Pre-Hab",
        duration: "Weeks 0-Surgery Date",
        description:
          "Reduce swelling, restore full range of motion, rebuild quad and hamstring strength. Undergoing proper pre-hab generally results in better post-operative outcomes. Exercises: Quadricep sets, straight leg raises, gentle hamstring/calf stretches.",
      },
      {
        title: "Early Protection & Recovery",
        duration: "Weeks 0-2 after surgery",
        description:
          "Protect graft, manage pain and swelling, restore full passive knee extension, re-activate the quadriceps. Milestones: Achieving 0° knee extension, bending to 90°. Note: This is just an estimated timeline, some may move at a slower or faster pace.",
      },
      {
        title: "Range of Motion & Strength",
        duration: "Weeks 2-6",
        description:
          "Focus on gaining full range of motion, single-leg balancing, and foundational lower-body strength. Exercises: Squats, leg presses, step-ups, stationary biking, balance drills.",
      },
      {
        title: "Advanced Strength & Initial Running",
        duration: "Months 2-4",
        description:
          "Focus on gaining more symmetrical lower body strength, eccentric control, and dynamic balance. Once quadricep strength reaches at least 70% of the uninjured leg, straight-line light jogging can start. Only if strength and control criteria are met.",
      },
      {
        title: "Return to Sport Testing & Gaining Confidence",
        duration: "Months 6-12+",
        description:
          "Focus on gaining pre-surgery strength, explosive power, psychological readiness, and begin practicing certain aspects of sport. Criteria for return to sport clearance: Greater than 90% score on single-leg hop test (distance, height, and landing). Able to perform cutting and pivoting movements pain free. Surgeon and physical therapist approval.",
      },
    ],
    videos: [
      { title: "ACL Rehab Early Stage Exercises", youtube_id: "GlmphYGAyBg" },
      { title: "Return to Sport Plyometrics", youtube_id: "dAyfCvPpk4g" },
    ],
    tips: [
      "Never skip the pre-hab phase — full extension early prevents long-term stiffness.",
      "Symmetry matters: aim for 90%+ strength vs the healthy leg before running.",
      "Psychological readiness is as important as physical clearance.",
    ],
    subreddit: "r/ACL",
  },
  {
    slug: "ankle-sprain",
    name: "Ankle Sprain",
    body_part: "Ankle",
    severity: "Mild-Moderate",
    recovery_time: "2-6 weeks",
    tagline: "Rolling back to stable, confident footwork.",
    description:
      "An ankle sprain occurs when the ligaments supporting the ankle stretch or tear, usually from rolling the foot inward. Most heal well with progressive loading, balance training, and proprioception work to prevent re-injury.",
    thumbnail:
      "https://deltaorthosports.com/wp-content/uploads/2025/06/Ankle-Sprains.jpeg",
    phases: [
      {
        title: "Protection",
        duration: "Day 0-4",
        description:
          "Relative rest, compression, and gentle pain-free ankle pumps to maintain circulation.",
      },
      {
        title: "Mobility",
        duration: "Day 4-14",
        description:
          "Restore range of motion with alphabet drills and light band work.",
      },
      {
        title: "Strength & Balance",
        duration: "Week 2-4",
        description:
          "Calf raises, resisted eversion, and single-leg balance to rebuild proprioception.",
      },
      {
        title: "Return to Play",
        duration: "Week 4-6",
        description:
          "Hopping, agility ladders, and sport drills with taping if needed.",
      },
    ],
    videos: [
      {
        title: "Ankle Sprain Rehab Progression",
        youtube_id: "Gxk-CGVGqUc",
      },
      {
        title: "Balance & Proprioception Drills",
        youtube_id: "4W9Y2R3rHkE",
      },
    ],
    tips: [
      "Move early — prolonged immobilization slows recovery.",
      "Balance training is the #1 way to prevent recurring sprains.",
      "Don't rush back to cutting sports without single-leg confidence.",
    ],
    subreddit: "r/running",
  },
  {
    slug: "hamstring-strain",
    name: "Hamstring Strain",
    body_part: "Thigh",
    severity: "Mild-Severe",
    recovery_time: "3-8 weeks",
    tagline: "Rebuilding the engine behind every sprint.",
    description:
      "Hamstring strains range from mild (grade 1) to severe (grade 3 tear) and are among the most common sprint injuries. Recovery emphasizes eccentric strengthening, progressive loading, and sport-specific running mechanics.",
    thumbnail:
      "https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2022/04/1140-hamstring-injury.jpg",
    phases: [
      {
        title: "Acute Phase",
        duration: "Day 0-5",
        description: "RICE protocol, gentle range-of-motion, avoid aggressive stretching.",
      },
      {
        title: "Sub-Acute Loading",
        duration: "Week 1-3",
        description:
          "Begin isometric holds, progress to gentle Nordic curls and bridge variations.",
      },
      {
        title: "Eccentric Strength",
        duration: "Week 3-6",
        description:
          "Full Nordic hamstring curls, Romanian deadlifts, and sprint-prep drills.",
      },
      {
        title: "Return to Running",
        duration: "Week 6-8",
        description:
          "Gradual sprint progression, asymmetry testing, and sport-specific clearance.",
      },
    ],
    videos: [
      {
        title: "Hamstring Strain Rehab Guide",
        youtube_id: "2OQ3QcEiNoE",
      },
      {
        title: "Nordic Hamstring Curl Tutorial",
        youtube_id: "kEqS5NON2bA",
      },
    ],
    tips: [
      "Eccentric exercises (Nordic curls) are proven to reduce re-injury risk.",
      "Pain-free walking must come before jogging; jogging before sprinting.",
      "Bilateral asymmetry >10% is a warning sign — retest before returning to sport.",
    ],
    subreddit: "r/running",
  },
  {
    slug: "rotator-cuff",
    name: "Rotator Cuff Injury",
    body_part: "Shoulder",
    severity: "Moderate-Severe",
    recovery_time: "3-6 months",
    tagline: "Restoring the four-muscle team that powers every throw.",
    description:
      "The rotator cuff is a group of four muscles that stabilize and move the shoulder. Tears or tendinopathy arise from overhead sports, falls, or overuse. Rehab prioritizes restoring pain-free range of motion, then progressive strengthening of the cuff and scapular muscles.",
    thumbnail:
      "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    phases: [
      {
        title: "Pain Management",
        duration: "Week 0-3",
        description:
          "Relative rest from overhead activity, pendulum exercises, and gentle passive ROM.",
      },
      {
        title: "Mobility Restoration",
        duration: "Week 3-8",
        description:
          "Full passive and active ROM, begin light rotator cuff and scapular exercises.",
      },
      {
        title: "Strengthening",
        duration: "Month 2-4",
        description:
          "Resistance band external rotation, side-lying ER, rows, and scapular stabilization.",
      },
      {
        title: "Functional Return",
        duration: "Month 4-6",
        description:
          "Sport-specific loading — throwing progressions, overhead pressing, swim mechanics.",
      },
    ],
    videos: [
      {
        title: "Rotator Cuff Rehab Exercises",
        youtube_id: "d2HYF1AqcXs",
      },
      {
        title: "Scapular Strengthening for Shoulder Health",
        youtube_id: "MJvMRFJlFHU",
      },
    ],
    tips: [
      "Don't ignore scapular stability — it underpins every cuff exercise.",
      "Sleep position matters: avoid lying on the injured shoulder.",
      "Surgical vs. conservative decision should be made with a sports medicine specialist.",
    ],
    subreddit: "r/Throwers",
  },
  {
    slug: "tennis-elbow",
    name: "Tennis Elbow",
    body_part: "Elbow",
    severity: "Mild-Moderate",
    recovery_time: "6-12 weeks",
    tagline: "Calming the lateral elbow so you can grip life again.",
    description:
      "Lateral epicondylitis (tennis elbow) is caused by overuse of the forearm muscles that attach to the outer elbow. Despite the name, it's common in any repetitive gripping activity. Heavy eccentric loading has the strongest evidence for full recovery.",
    thumbnail:
      "https://images.pexels.com/photos/8154086/pexels-photo-8154086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    phases: [
      {
        title: "Load Reduction",
        duration: "Week 0-2",
        description:
          "Identify and reduce provocative activities; gentle stretching of wrist extensors.",
      },
      {
        title: "Isometric Loading",
        duration: "Week 2-4",
        description:
          "Wrist extension isometrics 5×45s to reduce pain sensitization.",
      },
      {
        title: "Eccentric Strengthening",
        duration: "Week 4-8",
        description:
          "Eccentric wrist curls on a step, Therabar/FlexBar twists, grip work.",
      },
      {
        title: "Sport Return",
        duration: "Week 8-12",
        description:
          "Progressive racket/sport loading, technique review to prevent recurrence.",
      },
    ],
    videos: [
      {
        title: "Tennis Elbow Exercises (Eccentric Protocol)",
        youtube_id: "oF9jFuMqmLg",
      },
      {
        title: "FlexBar Tyler Twist Technique",
        youtube_id: "ZR-PEaFKJPQ",
      },
    ],
    tips: [
      "The Tyler Twist with a FlexBar has strong RCT evidence behind it.",
      "Avoid complete rest — the tendon needs progressive load to heal.",
      "Check your grip size and technique if the injury recurs after sport return.",
    ],
    subreddit: "r/tennis",
  },
  {
    slug: "shin-splints",
    name: "Shin Splints",
    body_part: "Lower Leg",
    severity: "Mild",
    recovery_time: "2-6 weeks",
    tagline: "Quieting the tibia so you can run pain-free again.",
    description:
      "Medial tibial stress syndrome (shin splints) causes pain along the inner shin edge, typically in runners who increase mileage too quickly. Recovery involves load management, calf strengthening, and a gradual return-to-run plan.",
    thumbnail:
      "https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    phases: [
      {
        title: "Rest & Cross-Train",
        duration: "Week 0-2",
        description:
          "Reduce running load; swap for pool running, cycling, or swimming.",
      },
      {
        title: "Calf Strengthening",
        duration: "Week 2-4",
        description:
          "Heavy slow calf raises (3×12), tibialis anterior work, and hip strengthening.",
      },
      {
        title: "Return to Run",
        duration: "Week 4-6",
        description:
          "Run-walk intervals (Couch to 5K style), maximum 10% weekly mileage increase.",
      },
      {
        title: "Full Training",
        duration: "Week 6+",
        description:
          "Build back to normal volume; recheck running cadence and footwear.",
      },
    ],
    videos: [
      {
        title: "Shin Splints Treatment & Recovery",
        youtube_id: "k3_aDcwM6BM",
      },
      {
        title: "Return to Run Plan for Shin Splints",
        youtube_id: "4H5W5PkGUNg",
      },
    ],
    tips: [
      "The 10% rule: never increase weekly mileage by more than 10%.",
      "Cadence of 170-180 steps/min reduces tibial loading compared to slow overstriding.",
      "Rule out a stress fracture with your doctor if pain is focal and severe.",
    ],
    subreddit: "r/running",
  },
];

export const COMMUNITY_LINKS: CommunityLink[] = [
  {
    name: "r/ACL",
    subreddit: "ACL",
    description:
      "The go-to community for ACL tear recovery — pre-op tips, post-op timelines, and return-to-sport stories.",
    url: "https://www.reddit.com/r/ACL/",
    relatedInjuries: ["acl-tear"],
  },
  {
    name: "r/running",
    subreddit: "running",
    description:
      "General running community with injury advice threads for shin splints, hamstring issues, ankle sprains, and more.",
    url: "https://www.reddit.com/r/running/",
    relatedInjuries: ["shin-splints", "ankle-sprain", "hamstring-strain"],
  },
  {
    name: "r/physicaltherapy",
    subreddit: "physicaltherapy",
    description:
      "PTs and patients discuss rehab exercises, recovery timelines, and when to see a professional.",
    url: "https://www.reddit.com/r/physicaltherapy/",
    relatedInjuries: [
      "acl-tear",
      "rotator-cuff",
      "tennis-elbow",
      "hamstring-strain",
    ],
  },
  {
    name: "r/sportsinjuries",
    subreddit: "sportsinjuries",
    description:
      "A broad community for sharing experiences, asking questions, and supporting each other through all types of sports injuries.",
    url: "https://www.reddit.com/r/sportsinjuries/",
    relatedInjuries: [
      "acl-tear",
      "ankle-sprain",
      "hamstring-strain",
      "rotator-cuff",
      "tennis-elbow",
      "shin-splints",
    ],
  },
  {
    name: "r/Throwers",
    subreddit: "Throwers",
    description:
      "For throwing athletes (baseball, softball, javelin) — shoulder and elbow injury discussions are common.",
    url: "https://www.reddit.com/r/Throwers/",
    relatedInjuries: ["rotator-cuff", "tennis-elbow"],
  },
  {
    name: "r/tennis",
    subreddit: "tennis",
    description:
      "Tennis players discussing elbow, shoulder, and wrist injuries alongside technique to prevent recurrence.",
    url: "https://www.reddit.com/r/tennis/",
    relatedInjuries: ["tennis-elbow"],
  },
];
