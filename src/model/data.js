  const names = [
  "Natali Craig", "Kate Morrison", "Drew Cano", "Orlando Diggs",
  "Andi Lane", "Maria Martinez", "John Smith", "Jane Doe",
  "Peter Jones", "Sarah Williams", "Michael Brown", "Emily Davis",
  "Chris Miller", "Jessica Garcia", "Daniel Rodriguez", "Laura Wilson",
  "Paul White", "Anna Taylor", "Kevin Thomas", "Karen Jackson",
  "David Lee", "Betty Harris", "George Martin", "Lisa Thompson",
  "Steven Green", "Donna Hall", "Brian Adams", "Nancy Wright",
  "Tim Baker", "Linda Scott", "Charles Clark", "Susan Lewis",
  "Donald Robinson", "Sharon Walker", "Edward Young", "Helen King",
  "Frank Allen", "Sandra Turner", "Gary Hill", "Brenda Nelson",
  "Kenneth Carter", "Cynthia Perez", "Jose Sanchez", "Carol Rivera",
  "Ryan Roberts", "Janet Campbell", "Jacob Mitchell", "Shirley Phillips",
  "Larry Moore", "Elizabeth Hall", "Robert Martinez", "Patricia Baker"
];

const projects = [
  "Landing Page", "CRM Admin pages", "Client Project", "Admin Dashboard",
  "App Landing Page", "E-commerce Website", "Mobile App UI", "API Integration",
  "Data Analysis Report", "Marketing Campaign", "Blog Redesign", "Payment Gateway",
  "Social Media Strategy", "User Research", "Database Migration", "Game Development"
];

const addresses = [
  "Meadow Lane Oakland", "Larry San Francisco", "Bagwell Avenue Ocala",
  "Washburn Baton Rouge", "Nest Lane Olivette", "Maple Drive Houston",
  "Oak Street Chicago", "Pine Lane Los Angeles", "Main Street New York",
  "Broadway Seattle", "Park Avenue Boston", "River Road Miami",
  "Lakeview Terrace Denver", "Green Street Phoenix", "Hillside Avenue Atlanta",
  "Valley Road Dallas"
];

const dates = [
  "Just now", "A minute ago", "1 hour ago", "2 hours ago",
  "Yesterday", "2 days ago", "1 week ago", "2 weeks ago",
  "Feb 2, 2023", "Mar 10, 2023", "Apr 21, 2023", "May 5, 2023"
];

const statuses = [
  "In Progress", "Complete", "Pending", "Approved", "Rejected"
];

const rows = [];

// Function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate 100 data entries
for (let i = 0; i < 100; i++) {
  const newRow = {
    id: i + 1,
    orderId: `#CM${9801 + i}`,
    user: {
      name: getRandomElement(names),
      avatar: `/assets/avater${Math.floor(Math.random() * 8) + 1}.jpg`
    },
    project: getRandomElement(projects),
    address: getRandomElement(addresses),
    date: getRandomElement(dates),
    status: getRandomElement(statuses),
  };
  rows.push(newRow);
}

export default rows;