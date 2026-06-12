const allData = {
    sales: {
        today: [
            { date: '2026-06-12', customer: 'Ali K.', product: 'Wireless Mouse', amount: '$29.99', status: 'completed' },
            { date: '2026-06-12', customer: 'Sara M.', product: 'USB-C Hub', amount: '$45.00', status: 'completed' },
            { date: '2026-06-12', customer: 'Omar R.', product: 'Keyboard', amount: '$79.99', status: 'pending' },
        ],
        week: [
            { date: '2026-06-10', customer: 'Lina H.', product: 'Monitor 24"', amount: '$199.99', status: 'completed' },
            { date: '2026-06-09', customer: 'Hadi S.', product: 'Webcam HD', amount: '$59.99', status: 'completed' },
            { date: '2026-06-08', customer: 'Nour A.', product: 'Headset', amount: '$89.99', status: 'cancelled' },
            { date: '2026-06-07', customer: 'Ali K.', product: 'Mouse Pad', amount: '$15.99', status: 'completed' },
            { date: '2026-06-06', customer: 'Sara M.', product: 'Laptop Stand', amount: '$39.99', status: 'completed' },
        ],
        month: [
            { date: '2026-06-05', customer: 'Omar R.', product: 'SSD 1TB', amount: '$109.99', status: 'completed' },
            { date: '2026-06-01', customer: 'Lina H.', product: 'RAM 16GB', amount: '$79.99', status: 'completed' },
            { date: '2026-05-28', customer: 'Hadi S.', product: 'GPU RTX', amount: '$499.99', status: 'completed' },
            { date: '2026-05-20', customer: 'Nour A.', product: 'Power Supply', amount: '$89.99', status: 'pending' },
            { date: '2026-05-15', customer: 'Ali K.', product: 'Case Fan', amount: '$24.99', status: 'completed' },
        ],
        year: [
            { date: '2026-06-01', customer: 'Sara M.', product: 'Laptop Pro', amount: '$1,299.99', status: 'completed' },
            { date: '2026-03-15', customer: 'Omar R.', product: 'Tablet', amount: '$449.99', status: 'completed' },
            { date: '2025-12-20', customer: 'Lina H.', product: 'Phone X', amount: '$899.99', status: 'completed' },
            { date: '2025-09-10', customer: 'Hadi S.', product: 'Smart Watch', amount: '$299.99', status: 'pending' },
            { date: '2025-07-04', customer: 'Nour A.', product: 'Drone', amount: '$599.99', status: 'completed' },
        ]
    },
    views: {
        today: [
            { date: '2026-06-12', page: '/home', visitors: 320, bounce: '42%', avgTime: '2m 15s' },
            { date: '2026-06-12', page: '/products', visitors: 210, bounce: '38%', avgTime: '3m 40s' },
            { date: '2026-06-12', page: '/about', visitors: 95, bounce: '55%', avgTime: '1m 10s' },
        ],
        week: [
            { date: '2026-06-11', page: '/home', visitors: 290, bounce: '44%', avgTime: '2m 05s' },
            { date: '2026-06-10', page: '/products', visitors: 250, bounce: '36%', avgTime: '3m 50s' },
            { date: '2026-06-09', page: '/blog', visitors: 180, bounce: '48%', avgTime: '4m 20s' },
            { date: '2026-06-08', page: '/home', visitors: 310, bounce: '40%', avgTime: '2m 30s' },
            { date: '2026-06-07', page: '/contact', visitors: 75, bounce: '60%', avgTime: '0m 50s' },
        ],
        month: [
            { date: '2026-06-05', page: '/home', visitors: 280, bounce: '43%', avgTime: '2m 10s' },
            { date: '2026-06-01', page: '/products', visitors: 240, bounce: '37%', avgTime: '3m 30s' },
            { date: '2026-05-25', page: '/blog', visitors: 200, bounce: '45%', avgTime: '4m 00s' },
            { date: '2026-05-18', page: '/home', visitors: 300, bounce: '41%', avgTime: '2m 20s' },
            { date: '2026-05-10', page: '/pricing', visitors: 150, bounce: '50%', avgTime: '1m 45s' },
        ],
        year: [
            { date: '2026-06-01', page: '/home', visitors: 350, bounce: '39%', avgTime: '2m 40s' },
            { date: '2026-02-14', page: '/products', visitors: 280, bounce: '35%', avgTime: '3m 55s' },
            { date: '2025-11-01', page: '/blog', visitors: 220, bounce: '42%', avgTime: '4m 30s' },
            { date: '2025-08-15', page: '/home', visitors: 400, bounce: '38%', avgTime: '2m 50s' },
            { date: '2025-05-20', page: '/landing', visitors: 500, bounce: '30%', avgTime: '5m 10s' },
        ]
    },
    revenue: {
        today: [
            { date: '2026-06-12', source: 'Online Store', revenue: '$1,250', expenses: '$420', net: '$830' },
            { date: '2026-06-12', source: 'Affiliate', revenue: '$380', expenses: '$50', net: '$330' },
            { date: '2026-06-12', source: 'Ads', revenue: '$210', expenses: '$30', net: '$180' },
        ],
        week: [
            { date: '2026-06-11', source: 'Online Store', revenue: '$1,100', expenses: '$400', net: '$700' },
            { date: '2026-06-10', source: 'Affiliate', revenue: '$420', expenses: '$55', net: '$365' },
            { date: '2026-06-09', source: 'Ads', revenue: '$250', expenses: '$35', net: '$215' },
            { date: '2026-06-08', source: 'Online Store', revenue: '$1,350', expenses: '$450', net: '$900' },
            { date: '2026-06-07', source: 'Sponsorship', revenue: '$500', expenses: '$0', net: '$500' },
        ],
        month: [
            { date: '2026-06-05', source: 'Online Store', revenue: '$1,400', expenses: '$480', net: '$920' },
            { date: '2026-06-01', source: 'Affiliate', revenue: '$390', expenses: '$45', net: '$345' },
            { date: '2026-05-25', source: 'Ads', revenue: '$280', expenses: '$40', net: '$240' },
            { date: '2026-05-18', source: 'Sponsorship', revenue: '$600', expenses: '$0', net: '$600' },
            { date: '2026-05-10', source: 'Online Store', revenue: '$1,200', expenses: '$390', net: '$810' },
        ],
        year: [
            { date: '2026-06-01', source: 'Online Store', revenue: '$1,500', expenses: '$500', net: '$1,000' },
            { date: '2026-03-01', source: 'Affiliate', revenue: '$450', expenses: '$60', net: '$390' },
            { date: '2025-12-01', source: 'Ads', revenue: '$320', expenses: '$50', net: '$270' },
            { date: '2025-09-01', source: 'Sponsorship', revenue: '$800', expenses: '$0', net: '$800' },
            { date: '2025-06-01', source: 'Online Store', revenue: '$1,600', expenses: '$520', net: '$1,080' },
        ]
    }
};

const comments = [
    { name: 'Sarah Johnson', avatar: 'S', text: 'Amazing dashboard design! Very clean and intuitive.', stars: 5, time: '5 minutes ago' },
    { name: 'Mike Chen', avatar: 'M', text: 'Great work on the analytics section. Would love to see more chart options.', stars: 4, time: '1 hour ago' },
    { name: 'Emily Davis', avatar: 'E', text: 'The responsive design works perfectly on my tablet. Excellent job!', stars: 5, time: '3 hours ago' },
    { name: 'Alex Kumar', avatar: 'A', text: 'Very professional layout. The filter buttons are smooth.', stars: 4, time: '5 hours ago' },
    { name: 'Lisa Wang', avatar: 'L', text: 'Clean code and beautiful UI. This is exactly what I needed.', stars: 5, time: '1 day ago' },
];

const chartData = [45, 60, 35, 75, 50, 65, 40, 80, 55, 70, 48, 90];
const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function renderTable(tableId, period, tableType) {
    const tbody = document.getElementById(tableId);
    const data = allData[tableType][period];
    tbody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        if (tableType === 'sales') {
            tr.innerHTML = `
                <td>${row.date}</td>
                <td>${row.customer}</td>
                <td>${row.product}</td>
                <td><strong>${row.amount}</strong></td>
                <td><span class="status ${row.status}">${row.status.charAt(0).toUpperCase() + row.status.slice(1)}</span></td>
            `;
        } else if (tableType === 'views') {
            tr.innerHTML = `
                <td>${row.date}</td>
                <td>${row.page}</td>
                <td><strong>${row.visitors}</strong></td>
                <td>${row.bounce}</td>
                <td>${row.avgTime}</td>
            `;
        } else if (tableType === 'revenue') {
            tr.innerHTML = `
                <td>${row.date}</td>
                <td>${row.source}</td>
                <td><strong>${row.revenue}</strong></td>
                <td>${row.expenses}</td>
                <td><strong style="color: #22C55E;">${row.net}</strong></td>
            `;
        }

        tbody.appendChild(tr);
    });
}

function renderComments() {
    const container = document.getElementById('commentsList');
    container.innerHTML = '';

    comments.forEach(c => {
        const starsHTML = '★'.repeat(c.stars) + '☆'.repeat(5 - c.stars);
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.innerHTML = `
            <div class="comment-avatar">${c.avatar}</div>
            <div class="comment-body">
                <div class="comment-name">${c.name}</div>
                <div class="comment-text">${c.text}</div>
                <div>
                    <span class="comment-stars">${starsHTML}</span>
                    <span class="comment-time">${c.time}</span>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

function renderChart() {
    const barsContainer = document.getElementById('chartBars');
    const labelsContainer = document.getElementById('chartLabels');
    barsContainer.innerHTML = '';
    labelsContainer.innerHTML = '';

    chartData.forEach((value, i) => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = (value * 2) + 'px';
        bar.title = `${chartLabels[i]}: ${value}K`;
        barsContainer.appendChild(bar);

        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = chartLabels[i];
        labelsContainer.appendChild(label);
    });
}

function setupFilters() {
    document.querySelectorAll('.filter-buttons').forEach(btnGroup => {
        const tableType = btnGroup.dataset.table;
        let tableId;
        if (tableType === 'sales') tableId = 'salesTableBody';
        else if (tableType === 'views') tableId = 'viewsTableBody';
        else if (tableType === 'revenue') tableId = 'revenueTableBody';

        btnGroup.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btnGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const period = btn.dataset.period;
                renderTable(tableId, period, tableType);
            });
        });
    });
}
renderTable('salesTableBody', 'today', 'sales');
renderTable('viewsTableBody', 'today', 'views');
renderTable('revenueTableBody', 'today', 'revenue');
renderComments();
renderChart();
setupFilters();
function parseCurrency(str) {
    if (!str) return 0;
    return parseFloat(str.replace(/[^0-9.-]+/g, '')) || 0;
}

function computeTotals() {
    let totalOrders = 0;
    for (const period in allData.sales) totalOrders += allData.sales[period].length;
    let totalViews = 0;
    for (const period in allData.views) {
        allData.views[period].forEach(v => { totalViews += (v.visitors || 0); });
    }
    let totalRevenue = 0;
    for (const period in allData.revenue) {
        allData.revenue[period].forEach(r => { totalRevenue += parseCurrency(r.revenue); });
    }

    document.getElementById('totalOrders').textContent = totalOrders.toLocaleString();
    document.getElementById('totalViews').textContent = totalViews.toLocaleString();
    document.getElementById('totalRevenue').textContent = '$' + totalRevenue.toLocaleString();
}

function filterTables(query) {
    const q = query.trim().toLowerCase();
    document.querySelectorAll('tbody').forEach(tbody => {
        tbody.querySelectorAll('tr').forEach(tr => {
            const match = tr.textContent.toLowerCase().includes(q);
            tr.style.display = match || q === '' ? '' : 'none';
        });
    });
    document.querySelectorAll('.comment-item').forEach(item => {
        const match = item.textContent.toLowerCase().includes(q);
        item.style.display = match || q === '' ? '' : 'none';
    });
}

function exportCurrentTableCSV() {
    const group = document.querySelector('.filter-buttons[data-table]');
    if (!group) return;
    const tableType = group.dataset.table;
    let tableId = '';
    if (tableType === 'sales') tableId = 'salesTableBody';
    else if (tableType === 'views') tableId = 'viewsTableBody';
    else if (tableType === 'revenue') tableId = 'revenueTableBody';

    const tbody = document.getElementById(tableId);
    if (!tbody) return;

    const rows = Array.from(tbody.querySelectorAll('tr')).filter(r => r.style.display !== 'none');
    const csv = rows.map(r => Array.from(r.querySelectorAll('td')).map(td => '"' + td.textContent.replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = tableType + '-export.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

document.getElementById('globalSearch').addEventListener('input', (e) => filterTables(e.target.value));
document.getElementById('exportBtn').addEventListener('click', exportCurrentTableCSV);

function renderChart() {
    const barsContainer = document.getElementById('chartBars');
    const labelsContainer = document.getElementById('chartLabels');
    barsContainer.innerHTML = '';
    labelsContainer.innerHTML = '';

    chartData.forEach((value, i) => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = '0px';
        bar.title = `${chartLabels[i]}: ${value}K`;
        barsContainer.appendChild(bar);

        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = chartLabels[i];
        labelsContainer.appendChild(label);

        setTimeout(() => { bar.style.height = (value * 2) + 'px'; }, i * 80 + 100);
    });
}

computeTotals();
