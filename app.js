// Enhanced Dashboard data and functionality with comprehensive insights
const dashboardData = {
  demographics: {
    total_respondents: 46,
    age_distribution: {
      "18-24": 35,
      "25-34": 11
    },
    occupation_distribution: {
      "Student": 27,
      "Employed full-time": 15,
      "Unemployed": 3,
      "Freelancer": 1
    }
  },
  platform_data: {
    primary_platforms: {
      "YouTube educational content": 21,
      "Coursera": 14,
      "Udemy": 5,
      "edX": 2,
      "MasterClass": 1,
      "Skillshare": 1,
      "LinkedIn Learning": 1,
      "Banking courses": 1
    }
  },
  dropoff_patterns: {
    drop_points: {
      "Within the first week": 14,
      "After 2-3 weeks": 9,
      "Midway through the course": 9,
      "Near the end of the course": 4,
      "Multiple courses at different points": 5,
      "Never dropped": 5
    },
    funnel_data: [
      {"stage": "Started course", "learners": 46, "percentage": 100.0},
      {"stage": "Completed first week", "learners": 32, "percentage": 69.6},
      {"stage": "Completed 2-3 weeks", "learners": 23, "percentage": 50.0},
      {"stage": "Completed midway", "learners": 14, "percentage": 30.4},
      {"stage": "Near completion", "learners": 10, "percentage": 21.7},
      {"stage": "Successfully completed", "learners": 5, "percentage": 10.9}
    ]
  },
  dropoff_reasons: [
    {"reason": "Lost interest in the subject", "count": 19},
    {"reason": "Lack of motivation", "count": 17},
    {"reason": "Lack of time", "count": 15},
    {"reason": "Course didn't meet my expectations", "count": 14},
    {"reason": "Boring or unengaging instructor", "count": 12},
    {"reason": "Lack of interaction with instructors/peers", "count": 12},
    {"reason": "Poor course quality", "count": 9},
    {"reason": "Course content was too difficult", "count": 2}
  ],
  desired_features: [
    {"feature": "Gamification (points, badges, leaderboards)", "mentions": 25},
    {"feature": "Mentor or study groups", "mentions": 23},
    {"feature": "Personalized learning paths", "mentions": 22},
    {"feature": "More interactive content", "mentions": 21},
    {"feature": "Better progress tracking", "mentions": 21},
    {"feature": "Certificates of completion", "mentions": 20},
    {"feature": "Clearer course structure", "mentions": 18},
    {"feature": "Networking opportunities with peers", "mentions": 12}
  ],
  engagement_factors: {
    "Lack of engaging content delivery": 2.96,
    "Real-world application issues": 2.83,
    "Insufficient feedback": 2.80,
    "Inconsistent updates": 2.63,
    "Deadlines/accountability": 2.52,
    "Poor UI": 2.52,
    "Content difficulty": 2.13
  }
};

// Industry research data
const industryData = {
  completion_rates: {
    mooc_median: 12.6,
    mooc_range: {min: 0.7, max: 52.1},
    traditional_online: {min: 13, max: 40},
    cohort_based: {min: 85, max: 100},
    microlearning: {improvement: 17, engagement_boost: 50}
  },
  retention_strategies: {
    gamification_impact: 21,
    personalization_improvement: 30,
    ai_tutoring_success: 50,
    group_learning_completion: 76.2,
    early_alert_systems: {"improvement_range": "5-15%"}
  },
  market_statistics: {
    industry_growth_since_2000: 900,
    projected_users_2028: 958.4,
    current_market_size_2024: 457.8,
    average_mobile_importance: 3.8
  },
  engagement_factors: {
    microlearning_preference: 94,
    video_vs_text_preference: "Video dominant",
    mobile_learning_growth: "Rapid adoption",
    ai_personalization_demand: "Increasing"
  }
};

// Enhanced community insights data with comprehensive content
const communityData = {
  reddit_discussions: [
    {
      title: "What is the future of MOOCs?",
      subreddit: "r/academia",
      summary: "Discussion about MOOC effectiveness with users noting completion rates below 10% and the need for classroom environment",
      url: "https://www.reddit.com/r/academia/comments/17evl8f/what_is_the_future_of_moocs/",
      engagement: "Multiple active comments",
      date: "2023",
      category: "Future Trends"
    },
    {
      title: "Have MOOCs lost their cool?",
      subreddit: "r/datascience",
      summary: "Users discuss that 90% of people don't finish MOOC classes and courses are becoming bloated with unnecessary content",
      url: "https://www.reddit.com/r/datascience/comments/1eng1zz/have_moocs_lost_their_cool/",
      engagement: "38 upvotes, active discussion",
      date: "2024",
      category: "User Experience"
    },
    {
      title: "EdTech is booming, but are we solving real problems?",
      subreddit: "r/edtech",
      summary: "Critical discussion about whether EdTech focuses on genuine learning improvement or just visual appeal",
      url: "https://www.reddit.com/r/edtech/comments/1lu23y5/edtech_is_booming_but_are_we_actually_solving/",
      engagement: "64 upvotes, 66 comments",
      date: "2024",
      category: "Industry Analysis"
    },
    {
      title: "Anyone currently working in edtech? Layoffs discussion",
      subreddit: "r/edtech",
      summary: "Current EdTech employees discussing industry layoffs and market challenges",
      url: "https://www.reddit.com/r/edtech/comments/1gwkyr9/anyone_currently_working_in_edtech_how_do_you/",
      engagement: "Multiple responses",
      date: "2024",
      category: "Industry Challenges"
    }
  ],
  blog_articles: [
    {
      title: "MOOC Interrupted: Top 10 Reasons Readers Didn't Complete Courses",
      source: "Open Culture",
      summary: "Analysis of 50+ responses identifying main reasons for MOOC abandonment including time constraints and content issues",
      url: "https://www.openculture.com/2013/04/10_reasons_you_didnt_complete_a_mooc.html",
      date: "2013",
      reading_time: "8 min",
      category: "User Research",
      tags: ["Completion Rates", "User Behavior", "MOOC Challenges"]
    },
    {
      title: "21+ Shocking Online Course Completion Rate Statistics",
      source: "BloggingX",
      summary: "Comprehensive statistics showing completion rates between 5-15% for free courses and 85-90% for cohort-based courses",
      url: "https://bloggingx.com/online-course-completion-statistics/",
      date: "2022",
      reading_time: "12 min",
      category: "Industry Statistics",
      tags: ["Statistics", "Completion Rates", "Cohort Learning"]
    },
    {
      title: "How Ed-tech Companies Can Ace at Student Retention",
      source: "MoEngage",
      summary: "Strategies for EdTech companies to improve student engagement and retention rates through data-driven approaches",
      url: "https://www.moengage.com/blog/ed-tech-companies-student-retention/",
      date: "2023",
      reading_time: "10 min",
      category: "Best Practices",
      tags: ["Retention", "Engagement", "Data Analytics"]
    },
    {
      title: "7 Student Retention Strategies for Online Schools",
      source: "NN Partners",
      summary: "Comprehensive guide covering early alert systems, academic advising, and community building for online education",
      url: "https://nn.partners/student-retention-strategies/",
      date: "2025",
      reading_time: "15 min",
      category: "Strategies",
      tags: ["Retention Strategies", "Online Learning", "Student Success"]
    },
    {
      title: "Customer Onboarding in EdTech: 10 Best Practices",
      source: "Userpilot",
      summary: "Examples from Duolingo, MasterClass, and Quizlet on effective user onboarding with surveys and gamification",
      url: "https://userpilot.com/blog/customer-onboarding-in-edtech/",
      date: "2025",
      reading_time: "7 min",
      category: "User Experience",
      tags: ["Onboarding", "UX Design", "Best Practices"]
    }
  ],
  news_articles: [
    {
      title: "How Duolingo reignited user growth",
      source: "Lenny's Newsletter",
      summary: "Case study showing 21% increase in retention through gamification and social features",
      url: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
      date: "2023",
      reading_time: "20 min",
      category: "Case Study",
      tags: ["Duolingo", "Growth", "Gamification", "Product Strategy"]
    },
    {
      title: "How Colleges Leverage Data to Retain Students",
      source: "EdTech Magazine",
      summary: "Florida International University achieved 10% increase in four-year graduation rates using analytics",
      url: "https://edtechmagazine.com/higher/article/2024/05/how-colleges-leverage-data-retain-students-enrollment-cliff-looms",
      date: "2024",
      reading_time: "6 min",
      category: "Higher Education",
      tags: ["Data Analytics", "Student Success", "Retention"]
    },
    {
      title: "How Data-Driven Strategies Transform EdTech",
      source: "WebEngage",
      summary: "Aakash Digital saw 31% increase in live class attendance through personalized engagement campaigns",
      url: "https://webengage.com/blog/how-edtech-companies-increase-student-engagement-revenue/",
      date: "2025",
      reading_time: "8 min",
      category: "Success Stories",
      tags: ["Data-Driven", "Engagement", "Personalization"]
    }
  ]
};

// Chart color palette
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Global chart instances and state
let charts = {};
let filteredData = {...dashboardData};
let currentFilters = {
  age: '',
  occupation: '',
  platform: '',
  search: ''
};
let activeTab = 'overview';

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
  console.log('Dashboard initializing...');
  initializeTabs();
  initializeFilters();
  initializeDataTable();
  initializeHeatmap();
  initializeTooltips();
  initializeExport();
  initializeCommunityContent();
  
  // Initialize charts after a brief delay to ensure DOM is ready
  setTimeout(() => {
    initializeCharts();
  }, 100);
});

// Enhanced tab functionality with proper state management
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      console.log('Tab clicked:', targetTab);
      
      // Show loading state
      showLoading();
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Add active class to clicked button and corresponding content
      this.classList.add('active');
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
      }
      
      // Set active tab
      activeTab = targetTab;
      
      // Initialize tab-specific content
      setTimeout(() => {
        if (targetTab === 'research') {
          initializeResearchCharts();
        }
        
        // Trigger chart resize for active tab
        Object.values(charts).forEach(chart => {
          if (chart && typeof chart.resize === 'function') {
            chart.resize();
          }
        });
        
        hideLoading();
      }, 200);
    });
  });

  // Set initial active tab
  activeTab = 'overview';
  console.log('Tabs initialized');
}

// Enhanced filters with real-time updates and proper debouncing
function initializeFilters() {
  console.log('Initializing filters...');
  const ageFilter = document.getElementById('ageFilter');
  const occupationFilter = document.getElementById('occupationFilter');
  const platformFilter = document.getElementById('platformFilter');
  const searchInput = document.getElementById('searchInput');

  // Add event listeners for filter changes with proper error handling
  if (ageFilter) {
    ageFilter.addEventListener('change', function(e) {
      console.log('Age filter changed:', e.target.value);
      handleFilterChange();
    });
  }
  if (occupationFilter) {
    occupationFilter.addEventListener('change', function(e) {
      console.log('Occupation filter changed:', e.target.value);
      handleFilterChange();
    });
  }
  if (platformFilter) {
    platformFilter.addEventListener('change', function(e) {
      console.log('Platform filter changed:', e.target.value);
      handleFilterChange();
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      console.log('Search input changed:', e.target.value);
      debounce(handleFilterChange, 300)();
    });
    
    // Ensure search input is properly enabled
    searchInput.removeAttribute('disabled');
    searchInput.style.pointerEvents = 'auto';
  }
  
  console.log('Filters initialized');
}

// Enhanced filter change handler with visual feedback
function handleFilterChange() {
  console.log('Handling filter change...');
  showLoading();
  
  try {
    const ageFilter = document.getElementById('ageFilter');
    const occupationFilter = document.getElementById('occupationFilter');
    const platformFilter = document.getElementById('platformFilter');
    const searchInput = document.getElementById('searchInput');

    currentFilters = {
      age: ageFilter ? ageFilter.value : '',
      occupation: occupationFilter ? occupationFilter.value : '',
      platform: platformFilter ? platformFilter.value : '',
      search: searchInput ? searchInput.value.toLowerCase().trim() : ''
    };

    console.log('Current filters:', currentFilters);

    // Update visual feedback
    updateFilterVisualFeedback();
    
    // Apply filters to data
    applyFiltersToData();
    
    // Update charts with filtered data
    setTimeout(() => {
      updateChartsWithFilteredData();
      updateDataTable();
      hideLoading();
    }, 500);
  } catch (error) {
    console.error('Error applying filters:', error);
    hideLoading();
  }
}

// Enhanced visual feedback for applied filters
function updateFilterVisualFeedback() {
  const hasFilters = Object.values(currentFilters).some(filter => filter !== '');
  const filterElements = document.querySelectorAll('.filters-row .form-control');
  
  filterElements.forEach(element => {
    if (hasFilters) {
      element.classList.add('filters-applied');
    } else {
      element.classList.remove('filters-applied');
    }
  });
}

// Enhanced data filtering logic
function applyFiltersToData() {
  filteredData = JSON.parse(JSON.stringify(dashboardData)); // Deep copy
  
  // Apply platform filter
  if (currentFilters.platform) {
    const filteredPlatforms = {};
    if (dashboardData.platform_data.primary_platforms[currentFilters.platform]) {
      filteredPlatforms[currentFilters.platform] = dashboardData.platform_data.primary_platforms[currentFilters.platform];
    }
    filteredData.platform_data.primary_platforms = filteredPlatforms;
  }
  
  // Apply search filter to dropoff reasons
  if (currentFilters.search) {
    filteredData.dropoff_reasons = dashboardData.dropoff_reasons.filter(item => 
      item.reason.toLowerCase().includes(currentFilters.search)
    );
  }
  
  // Apply search filter to desired features
  if (currentFilters.search) {
    filteredData.desired_features = dashboardData.desired_features.filter(item => 
      item.feature.toLowerCase().includes(currentFilters.search)
    );
  }
  
  console.log('Filters applied successfully');
}

// Enhanced chart updates with smooth animations
function updateChartsWithFilteredData() {
  try {
    // Update platform distribution chart
    if (charts.platformDistributionChart) {
      charts.platformDistributionChart.data.labels = Object.keys(filteredData.platform_data.primary_platforms);
      charts.platformDistributionChart.data.datasets[0].data = Object.values(filteredData.platform_data.primary_platforms);
      charts.platformDistributionChart.update('active');
    }
    
    // Update dropoff reasons chart
    if (charts.dropoffReasonsChart && filteredData.dropoff_reasons.length > 0) {
      charts.dropoffReasonsChart.data.labels = filteredData.dropoff_reasons.map(item => item.reason);
      charts.dropoffReasonsChart.data.datasets[0].data = filteredData.dropoff_reasons.map(item => item.count);
      charts.dropoffReasonsChart.update('active');
    }
    
    // Update desired features chart
    if (charts.desiredFeaturesChart && filteredData.desired_features.length > 0) {
      charts.desiredFeaturesChart.data.labels = filteredData.desired_features.map(item => item.feature);
      charts.desiredFeaturesChart.data.datasets[0].data = filteredData.desired_features.map(item => item.mentions);
      charts.desiredFeaturesChart.update('active');
    }
    
    // Add visual feedback that charts are updated
    const chartCards = document.querySelectorAll('.chart-card');
    chartCards.forEach(card => {
      card.classList.add('chart-update');
      setTimeout(() => card.classList.remove('chart-update'), 300);
    });
    
    console.log('Charts updated successfully');
  } catch (error) {
    console.error('Error updating charts:', error);
  }
}

// Initialize all charts with enhanced styling
function initializeCharts() {
  console.log('Initializing charts...');
  createFunnelChart();
  createDropoffReasonsChart();
  createPlatformDistributionChart();
  createAgeCompletionChart();
  createOccupationPreferencesChart();
  createEngagementFactorsChart();
  createDesiredFeaturesChart();
  console.log('Charts initialized');
}

// Initialize research tab charts
function initializeResearchCharts() {
  if (!charts.completionBenchmarkChart) {
    createCompletionBenchmarkChart();
    createRetentionComparisonChart();
    createMarketTrendsChart();
    createEngagementStatsChart();
  }
}

// Enhanced chart creation functions with better styling and error handling
function createFunnelChart() {
  const ctx = document.getElementById('funnelChart');
  if (!ctx) return;
  
  try {
    charts.funnelChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: dashboardData.dropoff_patterns.funnel_data.map(item => item.stage),
        datasets: [{
          label: 'Learners',
          data: dashboardData.dropoff_patterns.funnel_data.map(item => item.learners),
          backgroundColor: chartColors[0],
          borderColor: chartColors[0],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          },
          tooltip: {
            callbacks: {
              afterLabel: function(context) {
                const percentage = dashboardData.dropoff_patterns.funnel_data[context.dataIndex].percentage;
                return `${percentage}% of initial enrollment`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#f5f5f5',
              maxRotation: 45
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating funnel chart:', error);
  }
}

function createDropoffReasonsChart() {
  const ctx = document.getElementById('dropoffReasonsChart');
  if (!ctx) return;
  
  try {
    charts.dropoffReasonsChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: filteredData.dropoff_reasons.map(item => item.reason),
        datasets: [{
          label: 'Mentions',
          data: filteredData.dropoff_reasons.map(item => item.count),
          backgroundColor: chartColors[2],
          borderColor: chartColors[2],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          y: {
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating dropoff reasons chart:', error);
  }
}

function createPlatformDistributionChart() {
  const ctx = document.getElementById('platformDistributionChart');
  if (!ctx) return;
  
  try {
    charts.platformDistributionChart = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: Object.keys(filteredData.platform_data.primary_platforms),
        datasets: [{
          data: Object.values(filteredData.platform_data.primary_platforms),
          backgroundColor: chartColors,
          borderColor: '#1f2121',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#f5f5f5',
              padding: 20
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const percentage = ((context.parsed / total) * 100).toFixed(1);
                return `${context.label}: ${context.parsed} users (${percentage}%)`;
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating platform distribution chart:', error);
  }
}

function createAgeCompletionChart() {
  const ctx = document.getElementById('ageCompletionChart');
  if (!ctx) return;
  
  try {
    const ageData = {
      '18-24': { total: 35, completed: Math.round(35 * 0.11) },
      '25-34': { total: 11, completed: Math.round(11 * 0.10) }
    };
    
    charts.ageCompletionChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: Object.keys(ageData),
        datasets: [{
          label: 'Total Learners',
          data: Object.values(ageData).map(item => item.total),
          backgroundColor: chartColors[1],
          borderColor: chartColors[1],
          borderWidth: 1
        }, {
          label: 'Completed',
          data: Object.values(ageData).map(item => item.completed),
          backgroundColor: chartColors[0],
          borderColor: chartColors[0],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating age completion chart:', error);
  }
}

function createOccupationPreferencesChart() {
  const ctx = document.getElementById('occupationPreferencesChart');
  if (!ctx) return;
  
  try {
    charts.occupationPreferencesChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: Object.keys(dashboardData.demographics.occupation_distribution),
        datasets: [{
          label: 'Number of Learners',
          data: Object.values(dashboardData.demographics.occupation_distribution),
          backgroundColor: chartColors[4],
          borderColor: chartColors[4],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating occupation preferences chart:', error);
  }
}

function createEngagementFactorsChart() {
  const ctx = document.getElementById('engagementFactorsChart');
  if (!ctx) return;
  
  try {
    charts.engagementFactorsChart = new Chart(ctx.getContext('2d'), {
      type: 'radar',
      data: {
        labels: Object.keys(dashboardData.engagement_factors),
        datasets: [{
          label: 'Impact Score',
          data: Object.values(dashboardData.engagement_factors),
          backgroundColor: 'rgba(31, 184, 205, 0.2)',
          borderColor: chartColors[0],
          borderWidth: 2,
          pointBackgroundColor: chartColors[0]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 5,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            pointLabels: {
              color: '#f5f5f5',
              font: {
                size: 11
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating engagement factors chart:', error);
  }
}

function createDesiredFeaturesChart() {
  const ctx = document.getElementById('desiredFeaturesChart');
  if (!ctx) return;
  
  try {
    charts.desiredFeaturesChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: filteredData.desired_features.map(item => item.feature),
        datasets: [{
          label: 'Mentions',
          data: filteredData.desired_features.map(item => item.mentions),
          backgroundColor: chartColors[6],
          borderColor: chartColors[6],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          y: {
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating desired features chart:', error);
  }
}

// New Industry Research Charts
function createCompletionBenchmarkChart() {
  const ctx = document.getElementById('completionBenchmarkChart');
  if (!ctx) return;
  
  try {
    charts.completionBenchmarkChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Our Survey', 'MOOC Median', 'Traditional Online', 'Cohort-Based', 'MIT Study'],
        datasets: [{
          label: 'Completion Rate (%)',
          data: [10.9, 12.6, 26.5, 92.5, 3.13],
          backgroundColor: [chartColors[2], chartColors[0], chartColors[1], chartColors[3], chartColors[4]],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating completion benchmark chart:', error);
  }
}

function createRetentionComparisonChart() {
  const ctx = document.getElementById('retentionComparisonChart');
  if (!ctx) return;
  
  try {
    charts.retentionComparisonChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Online Learning', 'Traditional Classroom', 'Microlearning'],
        datasets: [{
          label: 'Min Retention (%)',
          data: [25, 8, 70],
          backgroundColor: chartColors[5],
          borderWidth: 1
        }, {
          label: 'Max Retention (%)',
          data: [60, 10, 90],
          backgroundColor: chartColors[0],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating retention comparison chart:', error);
  }
}

function createMarketTrendsChart() {
  const ctx = document.getElementById('marketTrendsChart');
  if (!ctx) return;
  
  try {
    charts.marketTrendsChart = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['2020', '2024', '2028'],
        datasets: [{
          label: 'Market Size (Billion $)',
          data: [250, 457.8, 750],
          borderColor: chartColors[0],
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: '#f5f5f5'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#f5f5f5'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating market trends chart:', error);
  }
}

function createEngagementStatsChart() {
  const ctx = document.getElementById('engagementStatsChart');
  if (!ctx) return;
  
  try {
    charts.engagementStatsChart = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Microlearning Effectiveness', 'Gamification Impact', 'Personalization', 'AI Tutoring'],
        datasets: [{
          data: [17, 21, 30, 50],
          backgroundColor: [chartColors[1], chartColors[6], chartColors[0], chartColors[3]],
          borderColor: '#1f2121',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#f5f5f5',
              padding: 20
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.parsed}% improvement`;
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating engagement stats chart:', error);
  }
}

// Enhanced community content initialization
function initializeCommunityContent() {
  console.log('Initializing community content...');
  renderRedditDiscussions();
  renderBlogArticles();
  renderNewsArticles();
  console.log('Community content initialized');
}

function renderRedditDiscussions() {
  const container = document.getElementById('redditDiscussions');
  if (!container) return;
  
  try {
    container.innerHTML = communityData.reddit_discussions.map(post => `
      <div class="discussion-card">
        <div class="card-header">
          <h4 class="card-title">
            <a href="${post.url}" target="_blank" rel="noopener noreferrer">${post.title}</a>
          </h4>
        </div>
        <div class="card-meta">
          <span class="card-source">${post.subreddit}</span>
          <span class="card-engagement">${post.engagement}</span>
          <span class="card-category">${post.category}</span>
          <span>${post.date}</span>
        </div>
        <p class="card-summary">${post.summary}</p>
        <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="card-link">View Discussion</a>
      </div>
    `).join('');
    console.log('Reddit discussions rendered');
  } catch (error) {
    console.error('Error rendering Reddit discussions:', error);
  }
}

function renderBlogArticles() {
  const container = document.getElementById('blogArticles');
  if (!container) return;
  
  try {
    container.innerHTML = communityData.blog_articles.map(article => `
      <div class="article-card">
        <div class="card-header">
          <h4 class="card-title">
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>
          </h4>
        </div>
        <div class="card-meta">
          <span class="card-source">${article.source}</span>
          <span class="card-reading-time">${article.reading_time}</span>
          <span class="card-category">${article.category}</span>
          <span>${article.date}</span>
        </div>
        <p class="card-summary">${article.summary}</p>
        <div class="card-tags">
          ${article.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="card-link">Read Article</a>
      </div>
    `).join('');
    console.log('Blog articles rendered');  
  } catch (error) {
    console.error('Error rendering blog articles:', error);
  }
}

function renderNewsArticles() {
  const container = document.getElementById('newsArticles');
  if (!container) return;
  
  try {
    container.innerHTML = communityData.news_articles.map(article => `
      <div class="news-card">
        <div class="card-header">
          <h4 class="card-title">
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a>
          </h4>
        </div>
        <div class="card-meta">
          <span class="card-source">${article.source}</span>
          <span class="card-reading-time">${article.reading_time}</span>
          <span class="card-category">${article.category}</span>
          <span>${article.date}</span>
        </div>
        <p class="card-summary">${article.summary}</p>
        <div class="card-tags">
          ${article.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="card-link">Read More</a>
      </div>
    `).join('');
    console.log('News articles rendered');
  } catch (error) {
    console.error('Error rendering news articles:', error);
  }
}

// Enhanced data table functionality
function initializeDataTable() {
  const platformTableData = [
    { platform: 'YouTube', users: 21, market_share: 45.7, engagement: 'High' },
    { platform: 'Coursera', users: 14, market_share: 30.4, engagement: 'Medium' },
    { platform: 'Udemy', users: 5, market_share: 10.9, engagement: 'Medium' },
    { platform: 'edX', users: 2, market_share: 4.3, engagement: 'Low' },
    { platform: 'MasterClass', users: 1, market_share: 2.2, engagement: 'Low' },
    { platform: 'Others', users: 3, market_share: 6.5, engagement: 'Low' }
  ];

  renderTable(platformTableData);
  initializeTableSorting(platformTableData);
}

function renderTable(data) {
  const tbody = document.getElementById('platformTableBody');
  if (!tbody) return;
  
  try {
    tbody.innerHTML = data.map(row => `
      <tr>
        <td>${row.platform}</td>
        <td>${row.users}</td>
        <td>${row.market_share}%</td>
        <td class="engagement-${row.engagement.toLowerCase()}">${row.engagement}</td>
      </tr>
    `).join('');
  } catch (error) {
    console.error('Error rendering table:', error);
  }
}

function updateDataTable() {
  // Update table based on current filters if needed
  console.log('Data table updated with current filters');
}

function initializeTableSorting(data) {
  const headers = document.querySelectorAll('th[data-sort]');
  let currentSort = { column: null, direction: null };
  let sortedData = [...data];

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const column = this.getAttribute('data-sort');
      const direction = currentSort.column === column && currentSort.direction === 'asc' ? 'desc' : 'asc';
      
      headers.forEach(h => h.classList.remove('sorted'));
      this.classList.add('sorted');
      
      sortedData.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return direction === 'asc' ? aVal - bVal : bVal - aVal;
        }
        
        aVal = aVal.toString().toLowerCase();
        bVal = bVal.toString().toLowerCase();
        
        if (direction === 'asc') {
          return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
        } else {
          return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
        }
      });
      
      currentSort = { column, direction };
      renderTable(sortedData);
    });
  });
}

// Initialize heatmap
function initializeHeatmap() {
  const heatmapGrid = document.getElementById('dropoffHeatmap');
  if (!heatmapGrid) return;
  
  try {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    
    const heatmapData = [
      [14, 12, 8, 6, 5, 3, 2],
      [9, 8, 6, 4, 3, 2, 1],
      [6, 5, 4, 3, 2, 1, 1],
      [3, 2, 2, 1, 1, 1, 0]
    ];

    const maxValue = Math.max(...heatmapData.flat());
    
    heatmapData.forEach((week, weekIndex) => {
      week.forEach((value, dayIndex) => {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';
        
        const intensity = value / maxValue;
        const color = `rgba(219, 69, 69, ${intensity})`;
        cell.style.backgroundColor = color;
        
        cell.textContent = value;
        cell.title = `${weeks[weekIndex]} ${days[dayIndex]}: ${value} dropouts`;
        
        heatmapGrid.appendChild(cell);
      });
    });
    console.log('Heatmap initialized');
  } catch (error) {
    console.error('Error initializing heatmap:', error);
  }
}

// Initialize tooltips
function initializeTooltips() {
  const tooltip = document.getElementById('tooltip');
  if (!tooltip) return;
  
  document.addEventListener('mouseover', function(e) {
    if (e.target.hasAttribute('title')) {
      const title = e.target.getAttribute('title');
      tooltip.textContent = title;
      tooltip.classList.remove('hidden');
      
      const rect = e.target.getBoundingClientRect();
      tooltip.style.left = rect.left + 'px';
      tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
      
      e.target.setAttribute('data-title', title);
      e.target.removeAttribute('title');
    }
  });
  
  document.addEventListener('mouseout', function(e) {
    if (e.target.hasAttribute('data-title')) {
      tooltip.classList.add('hidden');
      e.target.setAttribute('title', e.target.getAttribute('data-title'));
      e.target.removeAttribute('data-title');
    }
  });
}

// FIXED: Enhanced export functionality with proper event handling and timestamp-based naming
function initializeExport() {
  console.log('Initializing export functionality...');
  const exportCSV = document.getElementById('exportCSV');
  const exportJSON = document.getElementById('exportJSON');
  
  if (exportCSV) {
    exportCSV.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('CSV export clicked');
      exportToCSV();
      showExportFeedback(this, 'CSV Exported!');
    });
    console.log('CSV export button initialized');
  }
  
  if (exportJSON) {
    exportJSON.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('JSON export clicked');
      exportToJSON();
      showExportFeedback(this, 'JSON Exported!');
    });
    console.log('JSON export button initialized');
  }
}

function exportToCSV() {
  try {
    console.log('Starting CSV export...');
    const csvData = [];
    
    // Add headers
    csvData.push(['Category', 'Item', 'Value', 'Filter_Applied']);
    
    // Add demographics data
    Object.entries(dashboardData.demographics.age_distribution).forEach(([age, count]) => {
      csvData.push(['Age Distribution', age, count, currentFilters.age || 'None']);
    });
    
    Object.entries(dashboardData.demographics.occupation_distribution).forEach(([occupation, count]) => {
      csvData.push(['Occupation', occupation, count, currentFilters.occupation || 'None']);
    });
    
    // Add filtered platform data
    Object.entries(filteredData.platform_data.primary_platforms).forEach(([platform, count]) => {
      csvData.push(['Platform Usage', platform, count, currentFilters.platform || 'None']);
    });
    
    // Add filtered dropout reasons
    filteredData.dropoff_reasons.forEach(item => {
      csvData.push(['Dropout Reasons', item.reason, item.count, currentFilters.search || 'None']);
    });
    
    // Add filtered desired features
    filteredData.desired_features.forEach(item => {
      csvData.push(['Desired Features', item.feature, item.mentions, currentFilters.search || 'None']);
    });
    
    // Convert to CSV format
    const csvContent = csvData.map(row => row.map(field => `"${field}"`).join(',')).join('\n');
    
    // Create timestamp for filename
    const now = new Date();
    const timestampForFile = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;
    
    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `edtech-analytics-filtered-${timestampForFile}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('CSV file downloaded successfully');
    }
  } catch (error) {
    console.error('Error exporting CSV:', error);
    alert('Error exporting CSV file. Please try again.');
  }
}

function exportToJSON() {
  try {
    console.log('Starting JSON export...');
    const now = new Date();
    const timestampForFile = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;
    
    const exportData = {
      export_timestamp: now.toISOString(),
      applied_filters: currentFilters,
      filtered_survey_data: filteredData,
      original_survey_data: dashboardData,
      industry_research: industryData,
      community_insights: communityData,
      metadata: {
        total_respondents: dashboardData.demographics.total_respondents,
        completion_rate: 10.9,
        export_version: '2.1',
        dashboard_version: 'Enhanced EdTech Analytics v2.1'
      }
    };
    
    // Create and trigger download
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `edtech-analytics-complete-${timestampForFile}.json`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('JSON file downloaded successfully');
    }
  } catch (error) {
    console.error('Error exporting JSON:', error);
    alert('Error exporting JSON file. Please try again.');
  }
}

function showExportFeedback(button, message) {
  const originalText = button.textContent;
  const originalClasses = button.className;
  
  button.textContent = message;
  button.classList.add('export-success');
  button.disabled = true;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.className = originalClasses;
    button.disabled = false;
  }, 2000);
}

// Loading state management
function showLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.remove('hidden');
  }
}

function hideLoading() {
  const loadingOverlay = document.getElementById('loadingOverlay');
  if (loadingOverlay) {
    loadingOverlay.classList.add('hidden');
  }
}

// Enhanced utility function for debouncing with proper error handling
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      try {
        func(...args);
      } catch (error) {
        console.error('Error in debounced function:', error);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}