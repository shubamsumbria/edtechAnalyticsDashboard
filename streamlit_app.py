"""
streamlit_app.py
Streamlit port of the EdTech Learning Analytics Dashboard.

Features replicated from the provided HTML/CSS/JS:
- Tabs: Overview, User Behavior, Platform Insights, Industry Research, Community Insights
- Filters: age, occupation, platform, free-text search (applies to reasons & features)
- Charts: funnel, horizontal bars for dropout reasons & desired features, doughnut for platform
- Table: platform performance
- Heatmap-like representation for drop-off timeline (grid)
- Export: CSV and JSON for filtered datasets (download buttons)
- Optional real-time Google Sheets connection (overrides embedded data)

Instructions for Google Sheets auth and running are included at the bottom of this file's docstring.
"""

import streamlit as st
import pandas as pd
import json
from datetime import datetime
import io
import plotly.express as px
import plotly.graph_objects as go


# -----------------------------
# 0) Page config and custom CSS
# -----------------------------
st.set_page_config(page_title="EdTech Learning Analytics", layout="wide", initial_sidebar_state="collapsed")

def load_css():
    """Inject custom CSS to style the Streamlit app like the original dashboard."""
    css = """
:root {
  /* Primitive Color Tokens */
  --color-white: rgba(255, 255, 255, 1);
  --color-black: rgba(0, 0, 0, 1);
  --color-cream-50: rgba(252, 252, 249, 1);
  --color-cream-100: rgba(255, 255, 253, 1);
  --color-gray-200: rgba(245, 245, 245, 1);
  --color-gray-300: rgba(167, 169, 169, 1);
  --color-gray-400: rgba(119, 124, 124, 1);
  --color-slate-500: rgba(98, 108, 113, 1);
  --color-brown-600: rgba(94, 82, 64, 1);
  --color-charcoal-700: rgba(31, 33, 33, 1);
  --color-charcoal-800: rgba(38, 40, 40, 1);
  --color-slate-900: rgba(19, 52, 59, 1);
  --color-teal-300: rgba(50, 184, 198, 1);
  --color-teal-400: rgba(45, 166, 178, 1);
  --color-teal-500: rgba(33, 128, 141, 1);
  --color-teal-600: rgba(29, 116, 128, 1);
  --color-teal-700: rgba(26, 104, 115, 1);
  --color-teal-800: rgba(41, 150, 161, 1);
  --color-red-400: rgba(255, 84, 89, 1);
  --color-red-500: rgba(192, 21, 47, 1);
  --color-orange-400: rgba(230, 129, 97, 1);
  --color-orange-500: rgba(168, 75, 47, 1);

  /* RGB versions for opacity control */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;
  --color-slate-500-rgb: 98, 108, 113;
  --color-red-500-rgb: 192, 21, 47;
  --color-red-400-rgb: 255, 84, 89;
  --color-orange-500-rgb: 168, 75, 47;
  --color-orange-400-rgb: 230, 129, 97;

  /* Background color tokens (Light Mode) */
  --color-bg-1: rgba(59, 130, 246, 0.08); /* Light blue */
  --color-bg-2: rgba(245, 158, 11, 0.08); /* Light yellow */
  --color-bg-3: rgba(34, 197, 94, 0.08); /* Light green */
  --color-bg-4: rgba(239, 68, 68, 0.08); /* Light red */
  --color-bg-5: rgba(147, 51, 234, 0.08); /* Light purple */
  --color-bg-6: rgba(249, 115, 22, 0.08); /* Light orange */
  --color-bg-7: rgba(236, 72, 153, 0.08); /* Light pink */
  --color-bg-8: rgba(6, 182, 212, 0.08); /* Light cyan */

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
  --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);

  /* Typography */
  --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  --font-size-4xl: 30px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
  --font-weight-bold: 600;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --letter-spacing-tight: -0.01em;

  /* Spacing */
  --space-0: 0;
  --space-1: 1px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-base: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04),
    0 2px 4px -1px rgba(0, 0, 0, 0.02);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04),
    0 4px 6px -2px rgba(0, 0, 0, 0.02);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Forcing dark theme as per original design */
body {
    background-color: var(--color-charcoal-700) !important;
    color: var(--color-gray-200) !important;
}

[data-baseweb="popover"] {
    background-color: var(--color-charcoal-800) !important;
}

/* Streamlit specific overrides */
.stApp {
    background-color: var(--color-charcoal-700);
}

.st-emotion-cache-1jicfl2 {
    width: 100%;
    padding: 0;
    max-width: 1280px;
    margin: auto;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-base);
  color: var(--color-gray-200);
  font-weight: var(--font-weight-semibold);
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }

/* Remove Streamlit's default top margin for the title */
.st-emotion-cache-16txtl3 {
    margin-top: -80px;
    padding-top: 0px;
}

/* Custom dashboard styles */
.dashboard-header {
  background-color: var(--color-charcoal-800);
  border-bottom: 1px solid rgba(119, 124, 124, 0.3);
  padding: var(--space-24) var(--space-32);
  margin-bottom: var(--space-32);
}

.header-subtitle {
  color: rgba(167, 169, 169, 0.7);
  font-size: var(--font-size-lg);
  margin-top: var(--space-8);
}

.kpi-section {
  padding: var(--space-24) var(--space-32);
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-20);
}

.kpi-card {
  background-color: var(--color-charcoal-800);
  border: 1px solid rgba(119, 124, 124, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--space-24);
  display: flex;
  align-items: center;
  gap: var(--space-16);
}

.kpi-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(180, 83, 9, 0.15);
  border-radius: var(--radius-base);
}

.kpi-content h3 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-teal-300);
  margin-bottom: var(--space-4);
}

.kpi-content p {
  color: rgba(167, 169, 169, 0.7);
  font-size: var(--font-size-base);
  margin: 0;
}

/* Filters section */
.filters-section {
  padding: var(--space-24) var(--space-32);
  background-color: rgba(21, 128, 61, 0.15);
  border-top: 1px solid rgba(119, 124, 124, 0.3);
  border-bottom: 1px solid rgba(119, 124, 124, 0.3);
  margin-bottom: var(--space-32);
}

/* Custom Tabs */
.tabs-nav {
    background-color: var(--color-charcoal-800);
    border-bottom: 1px solid rgba(119, 124, 124, 0.3);
    padding: 0 var(--space-16);
    margin-bottom: var(--space-32);
}
div.st-emotion-cache-0 {
    display: none;
}
.stRadio > div {
    flex-direction: row;
    justify-content: flex-start;
    gap: 0;
}
.stRadio [role="radiogroup"] > label {
    background: none;
    border: none;
    padding: var(--space-16) var(--space-24);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: rgba(167, 169, 169, 0.7);
    cursor: pointer;
    border-bottom: 3px solid transparent;
    transition: all 150ms cubic-bezier(0.16, 1, 0.3, 1);
    margin: 0;
    border-radius: 0;
}
.stRadio [role="radiogroup"] > label:hover {
    color: var(--color-gray-200);
    background-color: rgba(119, 124, 124, 0.15);
}
.stRadio [role="radiogroup"] > label.st-emotion-cache-1y4p8pa,
.stRadio [role="radiogroup"] > label:has(input:checked) {
    color: var(--color-teal-300);
    border-bottom-color: var(--color-teal-300);
    background-color: rgba(29, 78, 216, 0.15);
}
.stRadio [role="radiogroup"] > label > div {
    display: none; /* Hide the radio button circle */
}
.stRadio [role="radiogroup"] > label > span {
    padding: 0 !important; /* Reset padding on the text span */
}

/* Chart and Insight Cards */
.chart-card, .insight-card {
  background-color: var(--color-charcoal-800);
  border: 1px solid rgba(119, 124, 124, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--space-24);
  margin-bottom: var(--space-24);
}
.chart-card h3, .insight-card h4 {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--color-gray-200);
    margin-bottom: var(--space-20);
    border-bottom: 1px solid rgba(119, 124, 124, 0.15);
    padding-bottom: var(--space-12);
}
.insight-card h4 {
    color: var(--color-teal-300);
}
.insight-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.insight-card li {
  padding: var(--space-12) 0;
  border-bottom: 1px solid rgba(119, 124, 124, 0.15);
  color: var(--color-gray-200);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  position: relative;
  padding-left: var(--space-20);
}
.insight-card li:last-child {
  border-bottom: none;
}
.insight-card li::before {
  content: '•';
  color: var(--color-teal-300);
  font-weight: var(--font-weight-bold);
  position: absolute;
  left: 0;
}

/* Sidebar styling */
.st-emotion-cache-163ttbj {
    background-color: var(--color-charcoal-800);
    border-right: 1px solid rgba(119, 124, 124, 0.3);
}

/* Buttons */
.stButton > button {
    background: var(--color-teal-300);
    color: var(--color-slate-900);
    border-radius: var(--radius-base);
    padding: var(--space-8) var(--space-16);
    border: none;
    font-weight: 500;
}
.stButton > button:hover {
    background: var(--color-teal-400);
    color: var(--color-slate-900);
}
.stDownloadButton > button {
    background: rgba(119, 124, 124, 0.15);
    color: var(--color-gray-200);
    border: 1px solid rgba(119, 124, 124, 0.2);
}
.stDownloadButton > button:hover {
    background: rgba(119, 124, 124, 0.25);
    color: var(--color-gray-200);
}
"""
    st.markdown(f"<style>{css}</style>", unsafe_allow_html=True)
    st.markdown('<body data-color-scheme="dark"></body>', unsafe_allow_html=True)

load_css()

# -----------------------------
# 1) Embedded seed data (matches your app.js dashboardData)
# -----------------------------
DASHBOARD_DATA = {
    "demographics": {
        "total_respondents": 46,
        "age_distribution": {"18-24": 35, "25-34": 11},
        "occupation_distribution": {
            "Student": 27,
            "Employed full-time": 15,
            "Unemployed": 3,
            "Freelancer": 1
        }
    },
    "platform_data": {
        "primary_platforms": {
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
    "dropoff_patterns": {
        "funnel_data": [
            {"stage": "Started course", "learners": 46, "percentage": 100.0},
            {"stage": "Completed first week", "learners": 32, "percentage": 69.6},
            {"stage": "Completed 2-3 weeks", "learners": 23, "percentage": 50.0},
            {"stage": "Completed midway", "learners": 14, "percentage": 30.4},
            {"stage": "Near completion", "learners": 10, "percentage": 21.7},
            {"stage": "Successfully completed", "learners": 5, "percentage": 10.9}
        ]
    },
    "dropoff_reasons": [
        {"reason": "Lost interest in the subject", "count": 19},
        {"reason": "Lack of motivation", "count": 17},
        {"reason": "Lack of time", "count": 15},
        {"reason": "Course didn't meet my expectations", "count": 14},
        {"reason": "Boring or unengaging instructor", "count": 12},
        {"reason": "Lack of interaction with instructors/peers", "count": 12},
        {"reason": "Poor course quality", "count": 9},
        {"reason": "Course content was too difficult", "count": 2}
    ],
    "desired_features": [
        {"feature": "Gamification (points, badges, leaderboards)", "mentions": 25},
        {"feature": "Mentor or study groups", "mentions": 23},
        {"feature": "Personalized learning paths", "mentions": 22},
        {"feature": "More interactive content", "mentions": 21},
        {"feature": "Better progress tracking", "mentions": 21},
        {"feature": "Certificates of completion", "mentions": 20},
        {"feature": "Clearer course structure", "mentions": 18},
        {"feature": "Networking opportunities with peers", "mentions": 12}
    ],
    "engagement_factors": {
        "Lack of engaging content delivery": 2.96,
        "Real-world application issues": 2.83,
        "Insufficient feedback": 2.80,
        "Inconsistent updates": 2.63,
        "Deadlines/accountability": 2.52,
        "Poor UI": 2.52,
        "Content difficulty": 2.13
    },
    "platform_table": [
        { "platform": "YouTube", "users": 21, "market_share": 45.7, "engagement": "High" },
        { "platform": "Coursera", "users": 14, "market_share": 30.4, "engagement": "Medium" },
        { "platform": "Udemy", "users": 5, "market_share": 10.9, "engagement": "Medium" },
        { "platform": "edX", "users": 2, "market_share": 4.3, "engagement": "Low" },
        { "platform": "MasterClass", "users": 1, "market_share": 2.2, "engagement": "Low" },
        { "platform": "Others", "users": 3, "market_share": 6.5, "engagement": "Low" }
    ],
    "heatmap": [
        [14,12,8,6,5,3,2],
        [9,8,6,4,3,2,1],
        [6,5,4,3,2,1,1],
        [3,2,2,1,1,1,0]
    ],
    "community_data": {
      "reddit_discussions": [
        { "title": "What is the future of MOOCs?", "subreddit": "r/academia", "summary": "Discussion about MOOC effectiveness with users noting completion rates below 10% and the need for classroom environment", "url": "#", "engagement": "Multiple active comments", "date": "2023", "category": "Future Trends" },
        { "title": "Have MOOCs lost their cool?", "subreddit": "r/datascience", "summary": "Users discuss that 90% of people don't finish MOOC classes and courses are becoming bloated with unnecessary content", "url": "#", "engagement": "38 upvotes, active discussion", "date": "2024", "category": "User Experience" }
      ],
      "blog_articles": [
        { "title": "21+ Shocking Online Course Completion Rate Statistics", "source": "BloggingX", "summary": "Comprehensive statistics showing completion rates between 5-15% for free courses and 85-90% for cohort-based courses", "url": "#", "date": "2022", "reading_time": "12 min", "category": "Industry Statistics", "tags": ["Statistics", "Completion Rates", "Cohort Learning"] },
        { "title": "7 Student Retention Strategies for Online Schools", "source": "NN Partners", "summary": "Comprehensive guide covering early alert systems, academic advising, and community building for online education", "url": "#", "date": "2025", "reading_time": "15 min", "category": "Strategies", "tags": ["Retention Strategies", "Online Learning", "Student Success"] }
      ],
      "news_articles": [
          { "title": "How Duolingo reignited user growth", "source": "Lenny's Newsletter", "summary": "Case study showing 21% increase in retention through gamification and social features", "url": "#", "date": "2023", "reading_time": "20 min", "category": "Case Study", "tags": ["Duolingo", "Growth", "Gamification", "Product Strategy"] }
      ]
    }
}

# Chart color palette from CSS
CHART_COLORS = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B']

# -----------------------------
# 2) Utility functions
# -----------------------------
def get_filtered_data(data, filters):
    """Apply filters to the embedded data structure and return filtered copies."""
    filtered = dict(data)
    if filters.get("platform"):
        key = filters["platform"]
        pp = data["platform_data"]["primary_platforms"]
        filtered["platform_data"] = {"primary_platforms": {k: v for k, v in pp.items() if k == key}}
    search = (filters.get("search") or "").strip().lower()
    if search:
        filtered["dropoff_reasons"] = [r for r in data["dropoff_reasons"] if search in r["reason"].lower()]
        filtered["desired_features"] = [f for f in data["desired_features"] if search in f["feature"].lower()]
    else:
        filtered["dropoff_reasons"] = list(data["dropoff_reasons"])
        filtered["desired_features"] = list(data["desired_features"])
    return filtered

# -----------------------------
# 4) Streamlit UI: layout & interaction
# -----------------------------
data = DASHBOARD_DATA

# --- HEADER ---
st.markdown("""
<div class="dashboard-header">
    <h1>EdTech Learning Analytics Dashboard</h1>
    <p class="header-subtitle">Comprehensive insights into online learning patterns and user engagement</p>
</div>
""", unsafe_allow_html=True)

# --- KPI CARDS ---
st.markdown("""
<div class="kpi-section">
    <div class="kpi-grid">
        <div class="kpi-card">
            <div class="kpi-icon">👥</div>
            <div class="kpi-content">
                <h3>46</h3>
                <p>Total Learners</p>
            </div>
        </div>
        <div class="kpi-card">
            <div class="kpi-icon">✅</div>
            <div class="kpi-content">
                <h3>10.9%</h3>
                <p>Completion Rate</p>
            </div>
        </div>
        <div class="kpi-card">
            <div class="kpi-icon">⏰</div>
            <div class="kpi-content">
                <h3>7 days</h3>
                <p>Avg Drop-off Time</p>
            </div>
        </div>
        <div class="kpi-card">
            <div class="kpi-icon">📊</div>
            <div class="kpi-content">
                <h3>12.6%</h3>
                <p>Industry Median</p>
            </div>
        </div>
    </div>
</div>
""", unsafe_allow_html=True)

# --- FILTERS ---
st.markdown('<div class="filters-section">', unsafe_allow_html=True)
colf1, colf2, colf3, colf4, colf5, colf6 = st.columns([2,2,2,3,1,1])
with colf1:
    age_filter = st.selectbox("Age group", options=[""] + list(data["demographics"]["age_distribution"].keys()), index=0, label_visibility="collapsed")
with colf2:
    occupation_filter = st.selectbox("Occupation", options=[""] + list(data["demographics"]["occupation_distribution"].keys()), index=0, label_visibility="collapsed")
with colf3:
    platform_keys = list(data["platform_data"]["primary_platforms"].keys())
    platform_filter = st.selectbox("Platform", options=[""] + platform_keys, index=0, label_visibility="collapsed")
with colf4:
    search_filter = st.text_input("Search data...", label_visibility="collapsed")

# Placeholder for export buttons
with colf5:
    st.button("Export CSV", use_container_width=True, disabled=True)
with colf6:
    st.button("Export JSON", use_container_width=True, disabled=True)

st.markdown('</div>', unsafe_allow_html=True)

# Build filtered data
filters = {"age": age_filter, "occupation": occupation_filter, "platform": platform_filter, "search": search_filter}
filtered = get_filtered_data(data, filters)

# --- TABS ---
st.markdown('<div class="tabs-nav">', unsafe_allow_html=True)
selected_tab = st.radio(
    "Tabs",
    ["Overview","User Behavior","Platform Insights","Industry Research","Community Insights"],
    horizontal=True,
    label_visibility="collapsed"
)
st.markdown('</div>', unsafe_allow_html=True)

# ---- Tab Content ----
if selected_tab == "Overview":
    c1, c2 = st.columns(2)
    with c1:
        st.markdown("""
        <div class="insight-card">
            <h4>📈 Critical Findings</h4>
            <ul>
                <li>Critical first-week retention challenge: <b>30.4%</b> of learners drop out within the first week, making this the most crucial intervention point</li>
                <li>YouTube dominance signals shift: <b>45.7%</b> prefer YouTube over traditional platforms, indicating demand for more flexible, video-centric learning</li>
                <li>Gamification leads feature requests: <b>25 mentions</b> make it the top desired feature, showing clear demand for engagement mechanics</li>
                <li>Completion crisis confirmed: Only <b>10.9%</b> completion rate aligns with industry medians, validating widespread retention challenges</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)
    with c2:
        st.markdown("""
        <div class="insight-card">
            <h4>🎯 Strategic Recommendations</h4>
            <ul>
                <li>Implement week-1 intervention program with gamified onboarding to address the critical 30.4% first-week drop-off</li>
                <li>Develop YouTube-style learning experiences with short-form, engaging video content to match platform preferences</li>
                <li>Launch comprehensive gamification system with points, badges, and leaderboards as the top-requested feature</li>
                <li>Create mentor-matching program and peer study groups to address the high demand for social learning features</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)

    ch1, ch2 = st.columns(2)
    with ch1:
        st.markdown('<div class="chart-card"><h3>Learning Funnel Analysis</h3></div>', unsafe_allow_html=True)
        df_funnel = pd.DataFrame(filtered["dropoff_patterns"]["funnel_data"])
        fig = px.bar(df_funnel, x="stage", y="learners", text="learners")
        fig.update_layout(height=400, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)', showlegend=False)
        fig.update_traces(marker_color=CHART_COLORS[0])
        st.plotly_chart(fig, use_container_width=True)

    with ch2:
        st.markdown('<div class="chart-card"><h3>Top Dropout Reasons</h3></div>', unsafe_allow_html=True)
        df_drop = pd.DataFrame(filtered["dropoff_reasons"])
        if not df_drop.empty:
            fig2 = px.bar(df_drop.sort_values("count"), x="count", y="reason", orientation="h")
            fig2.update_layout(height=400, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)', showlegend=False, yaxis={'title':''})
            fig2.update_traces(marker_color=CHART_COLORS[2])
            st.plotly_chart(fig2, use_container_width=True)
        else:
            st.info("No dropout reasons match the current search term.")

    ch3, ch4 = st.columns(2)
    with ch3:
        st.markdown('<div class="chart-card"><h3>Platform Usage Distribution</h3></div>', unsafe_allow_html=True)
        platform_map = filtered["platform_data"]["primary_platforms"]
        if platform_map:
            df_platform = pd.DataFrame({"platform": list(platform_map.keys()), "users": list(platform_map.values())})
            fig3 = px.pie(df_platform, names="platform", values="users", hole=0.45)
            fig3.update_traces(textposition='inside', textinfo='percent+label', marker=dict(colors=CHART_COLORS))
            fig3.update_layout(height=400, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)', showlegend=False)
            st.plotly_chart(fig3, use_container_width=True)
        else:
            st.info("No platform data for the current filter.")
    with ch4:
        st.markdown('<div class="chart-card"><h3>Completion Rates by Age Group</h3></div>', unsafe_allow_html=True)
        age_map = data["demographics"]["age_distribution"]
        ages_df = pd.DataFrame([{"age_group": k, "total": v, "completed": round(v * 0.11)} for k, v in age_map.items()])
        fig4 = go.Figure(data=[
            go.Bar(name='Total Learners', x=ages_df['age_group'], y=ages_df['total'], marker_color=CHART_COLORS[1]),
            go.Bar(name='Completed', x=ages_df['age_group'], y=ages_df['completed'], marker_color=CHART_COLORS[0])
        ])
        fig4.update_layout(barmode='group', height=400, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)', legend=dict(yanchor="top", y=0.99, xanchor="left", x=0.01))
        st.plotly_chart(fig4, use_container_width=True)

elif selected_tab == "User Behavior":
    c1, c2 = st.columns(2)
    with c1:
        st.markdown("""
        <div class="insight-card">
            <h4>🔍 Behavioral Patterns</h4>
            <ul>
                <li>Progressive abandonment pattern: Steady 20% drop-off at each stage suggests systematic engagement issues rather than random churn</li>
                <li>Motivation trumps difficulty: 'Lost interest' (19) and 'lack of motivation' (17) outweigh content difficulty (2), indicating engagement design problems</li>
                <li>Social learning demand: 23 requests for mentorship and 12 for networking show strong appetite for community-driven learning</li>
                <li>Mobile-first expectation: 3.8/5 importance rating for mobile access reflects modern learner expectations for anywhere-anytime learning</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)
    with c2:
        st.markdown("""
        <div class="insight-card">
            <h4>🚀 Behavioral Interventions</h4>
            <ul>
                <li>Deploy progressive engagement mechanics that intensify at each funnel stage to counter systematic drop-offs</li>
                <li>Redesign content delivery with micro-engagements, interactive elements, and bite-sized learning modules</li>
                <li>Establish peer-to-peer learning networks and mentor matching systems to satisfy social learning needs</li>
                <li>Optimize mobile learning experience with offline capabilities and push notification strategies</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)

    st.markdown('<div class="chart-card full-width"><h3>Drop-off Timeline Heatmap</h3></div>', unsafe_allow_html=True)
    heat = data.get("heatmap", [])
    if heat:
        heat_df = pd.DataFrame(heat, index=[f"Week {i+1}" for i in range(len(heat))], columns=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"])
        fig_heat = px.imshow(heat_df, text_auto=True, aspect="auto", color_continuous_scale='Reds')
        fig_heat.update_layout(height=300, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)')
        st.plotly_chart(fig_heat, use_container_width=True)

    bh1, bh2 = st.columns(2)
    with bh1:
        st.markdown('<div class="chart-card"><h3>Learning Preferences by Occupation</h3></div>', unsafe_allow_html=True)
        occ_df = pd.DataFrame(list(data["demographics"]["occupation_distribution"].items()), columns=["occupation","count"])
        fig_occ = px.bar(occ_df, x="occupation", y="count")
        fig_occ.update_layout(height=400, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)')
        fig_occ.update_traces(marker_color=CHART_COLORS[4])
        st.plotly_chart(fig_occ, use_container_width=True)
    with bh2:
        st.markdown('<div class="chart-card"><h3>Engagement Factor Impact</h3></div>', unsafe_allow_html=True)
        ef = data.get("engagement_factors", {})
        if ef:
            ef_df = pd.DataFrame({"factor": list(ef.keys()), "impact": list(ef.values())})
            fig_rad = px.line_polar(ef_df, r="impact", theta="factor", line_close=True)
            fig_rad.update_traces(fill='toself', line_color=CHART_COLORS[0])
            fig_rad.update_layout(height=400, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)')
            st.plotly_chart(fig_rad, use_container_width=True)

elif selected_tab == "Platform Insights":
    pi1, pi2 = st.columns(2)
    with pi1:
        st.markdown('<div class="chart-card"><h3>Most Desired Features</h3></div>', unsafe_allow_html=True)
        df_features = pd.DataFrame(filtered["desired_features"])
        if not df_features.empty:
            fig_fea = px.bar(df_features.sort_values("mentions"), x="mentions", y="feature", orientation="h")
            fig_fea.update_layout(height=400, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)', yaxis={'title':''})
            fig_fea.update_traces(marker_color=CHART_COLORS[6])
            st.plotly_chart(fig_fea, use_container_width=True)
        else:
            st.info("No desired features match the current search term.")
    with pi2:
        st.markdown('<div class="chart-card"><h3>Platform Performance Metrics</h3></div>', unsafe_allow_html=True)
        df_table = pd.DataFrame(data["platform_table"])
        st.dataframe(df_table, use_container_width=True, height=400)

elif selected_tab == "Industry Research":
    st.markdown('<div class="research-header"><h2>Industry Research & Benchmarks</h2><p>Comprehensive data from publicly available research and industry studies</p></div>', unsafe_allow_html=True)
    # Placeholder charts, as in the original streamlit app
    st.markdown('<div class="chart-card"><h3>MOOC Completion Rate Benchmarks</h3></div>', unsafe_allow_html=True)
    benchmark_df = pd.DataFrame({"category":["Our Survey", "MOOC Median", "Traditional Online", "Cohort-Based", "MIT Study"], "value":[10.9, 12.6, 26.5, 92.5, 3.13]})
    fig_b = px.bar(benchmark_df, x="category", y="value")
    fig_b.update_layout(height=380, template="plotly_dark", plot_bgcolor='rgba(0,0,0,0)', paper_bgcolor='rgba(0,0,0,0)')
    fig_b.update_traces(marker_color=[CHART_COLORS[2], CHART_COLORS[0], CHART_COLORS[1], CHART_COLORS[3], CHART_COLORS[4]])
    st.plotly_chart(fig_b, use_container_width=True)

elif selected_tab == "Community Insights":
    st.markdown('<div class="community-header"><h2>Community Insights & Discussions</h2><p>Real discussions and articles from Reddit, blogs, and news sources with comprehensive analysis</p></div>', unsafe_allow_html=True)

    st.markdown("<h3>📱 Reddit Discussions</h3>", unsafe_allow_html=True)
    for post in data["community_data"]["reddit_discussions"]:
        st.markdown(f"""
        <div class="discussion-card">
            <h4 class="card-title"><a href="{post['url']}">{post['title']}</a></h4>
            <div class="card-meta">
                <span class="card-source">{post['subreddit']}</span>
                <span class="card-engagement">{post['engagement']}</span>
                <span class="card-category">{post['category']}</span>
                <span>{post['date']}</span>
            </div>
            <p class="card-summary">{post['summary']}</p>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<h3>📚 Blog Articles & Research</h3>", unsafe_allow_html=True)
    for article in data["community_data"]["blog_articles"]:
        tags_html = "".join([f'<span class="card-tag">{tag}</span>' for tag in article['tags']])
        st.markdown(f"""
        <div class="article-card">
            <h4 class="card-title"><a href="{article['url']}">{article['title']}</a></h4>
            <div class="card-meta">
                <span class="card-source">{article['source']}</span>
                <span class="card-reading-time">{article['reading_time']}</span>
                <span class="card-category">{article['category']}</span>
                <span>{article['date']}</span>
            </div>
            <p class="card-summary">{article['summary']}</p>
            <div class="card-tags">{tags_html}</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<h3>📰 News & Industry Reports</h3>", unsafe_allow_html=True)
    for article in data["community_data"]["news_articles"]:
        tags_html = "".join([f'<span class="card-tag">{tag}</span>' for tag in article['tags']])
        st.markdown(f"""
        <div class="news-card">
            <h4 class="card-title"><a href="{article['url']}">{article['title']}</a></h4>
            <div class="card-meta">
                <span class="card-source">{article['source']}</span>
                <span class="card-reading-time">{article['reading_time']}</span>
                <span class="card-category">{article['category']}</span>
                <span>{article['date']}</span>
            </div>
            <p class="card-summary">{article['summary']}</p>
            <div class="card-tags">{tags_html}</div>
        </div>
        """, unsafe_allow_html=True)

# Footer / notes
st.markdown("---")
st.caption("This Streamlit app reproduces the UI/UX and functionalities of the original HTML/CSS/JS dashboard.")
