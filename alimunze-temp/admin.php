<?php
/**
 * Kasenge Miracle Centre Church — Alimunze
 * Admin Dashboard (Password Protected)
 * Student: Wasswa Makubuya Stephen | VU-CSF-2603-0849
 */

session_start();

$login_error = '';

define('ADMIN_USERNAME', 'admin');
define('ADMIN_PASSWORD', 'kmc2024');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        $_SESSION['kmc_admin'] = true;
        $_SESSION['kmc_user']  = $username;
        header('Location: admin.php');
        exit;
    }

    $login_error = 'Incorrect username or password.';
}

if (isset($_POST['logout'])) {
    session_destroy();
    header('Location: admin.php');
    exit;
}

$is_logged_in = isset($_SESSION['kmc_admin']) && $_SESSION['kmc_admin'] === true;

$contacts = [];
$prayers  = [];
$visitors = [];

if ($is_logged_in) {
    require_once 'db_connect.php';

    $tab = $_GET['tab'] ?? 'contacts';

    $r = $conn->query("SELECT * FROM contact_messages ORDER BY submitted_at DESC");
    while ($row = $r->fetch_assoc()) $contacts[] = $row;

    $r = $conn->query("SELECT * FROM prayer_requests ORDER BY submitted_at DESC");
    while ($row = $r->fetch_assoc()) $prayers[] = $row;

    $r = $conn->query("SELECT * FROM new_visitors ORDER BY submitted_at DESC");
    while ($row = $r->fetch_assoc()) $visitors[] = $row;

    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Dashboard — Alimunze KMC</title>
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    :root {
      --maroon:      #6B1A2A;
      --maroon-deep: #4A0F1B;
      --gold:        #C9A96E;
      --black:       #0A0A0A;
      --grey-dark:   #1A1A1A;
      --grey-light:  #f4f6f9;
      --white:       #FFFFFF;
      --font:        'Montserrat', sans-serif;
      --serif:       'Playfair Display', Georgia, serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: var(--font);
      background: var(--grey-light);
      color: #333;
      min-height: 100vh;
    }

    /* Login Page */
    .login-wrap {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--grey-light);
      padding: 2rem;
    }

    .login-box {
      background: var(--white);
      border-top: 4px solid var(--maroon);
      padding: 3rem 2.5rem;
      width: 100%;
      max-width: 420px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }

    .login-logo {
      text-align: center;
      margin-bottom: 2rem;
    }

    .login-logo img {
      width: 80px;
      height: auto;
      margin-bottom: 1rem;
    }

    .login-logo span {
      display: block;
      font-family: var(--serif);
      font-size: 1.6rem;
      color: var(--maroon-deep);
      margin-bottom: 0.3rem;
    }

    .login-logo small {
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #666;
    }

    .login-box h2 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1.8rem;
      color: #333;
      text-align: center;
    }

    .form-field {
      margin-bottom: 1.2rem;
    }

    .form-field label {
      display: block;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #666;
      margin-bottom: 0.5rem;
    }

    .form-field input {
      width: 100%;
      padding: 0.75rem 1rem;
      background: #fafafa;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #333;
      font-family: var(--font);
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .form-field input:focus { border-color: var(--maroon); }

    .login-btn {
      width: 100%;
      padding: 0.85rem;
      background: var(--maroon);
      color: var(--white);
      border: none;
      border-radius: 4px;
      font-family: var(--font);
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.2s;
      margin-top: 0.5rem;
    }

    .login-btn:hover { background: var(--maroon-deep); }

    .login-error {
      background: #fdf2f2;
      border: 1px solid #f9c2c2;
      color: #c92a2a;
      padding: 0.75rem 1rem;
      border-radius: 4px;
      font-size: 0.85rem;
      margin-bottom: 1.2rem;
      text-align: center;
    }

    /* Dashboard Layout */
    .dash-header {
      background: var(--black);
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .dash-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .dash-brand img {
      width: 40px;
      height: auto;
    }

    .dash-brand-text span {
      display: block;
      font-family: var(--serif);
      font-size: 1.2rem;
      color: var(--gold);
    }

    .dash-brand-text small {
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #aaa;
    }

    .dash-header-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .dash-user {
      font-size: 0.85rem;
      color: #ccc;
    }

    .dash-user strong { color: var(--white); }

    .logout-btn {
      padding: 0.5rem 1.2rem;
      background: transparent;
      border: 1px solid #444;
      color: #ccc;
      font-family: var(--font);
      font-size: 0.8rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .logout-btn:hover { border-color: var(--gold); color: var(--gold); }

    /* Stats Bar */
    .stats-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      padding: 2rem;
      background: var(--grey-light);
    }

    .stat-card {
      background: var(--white);
      padding: 1.5rem 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.03);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-left: 4px solid var(--maroon);
    }

    .stat-info span {
      display: block;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #666;
    }

    .stat-info strong {
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--maroon-deep);
      line-height: 1;
    }

    /* Tabs */
    .dash-tabs {
      display: flex;
      gap: 1rem;
      padding: 0 2rem;
      background: var(--grey-light);
    }

    .dash-tab {
      padding: 1rem 1.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #666;
      cursor: pointer;
      border-bottom: 3px solid transparent;
      transition: all 0.2s;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--white);
      border-radius: 8px 8px 0 0;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.01);
    }

    .dash-tab:hover { color: var(--maroon); }
    .dash-tab.active { color: var(--maroon); border-bottom-color: var(--maroon); }

    .tab-badge {
      background: var(--gold);
      color: var(--maroon-deep);
      font-size: 0.65rem;
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-weight: 700;
    }

    /* Table Area */
    .dash-content {
      padding: 0 2rem 2rem 2rem;
    }

    .table-wrap {
      background: var(--white);
      border-radius: 0 8px 8px 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.03);
      overflow-x: auto;
    }

    .table-header {
      padding: 2rem;
      border-bottom: 1px solid #eee;
    }

    .table-header h2 {
      font-family: var(--serif);
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--maroon-deep);
      margin-bottom: 0.3rem;
    }

    .table-header p {
      font-size: 0.9rem;
      color: #666;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead th {
      background: #f9f9f9;
      padding: 1rem 1.5rem;
      text-align: left;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #555;
      font-weight: 600;
      border-bottom: 2px solid #eee;
    }

    tbody tr {
      border-bottom: 1px solid #eee;
      transition: background 0.15s;
    }

    tbody tr:last-child { border-bottom: none; }
    tbody tr:hover { background: #fdfdfd; }

    tbody td {
      padding: 1.2rem 1.5rem;
      font-size: 0.9rem;
      color: #333;
      vertical-align: top;
    }

    .td-muted { color: #666; }
    .td-message { max-width: 350px; line-height: 1.6; color: #444; }
    .td-date { white-space: nowrap; color: #777; font-size: 0.85rem; }

    .badge-id {
      display: inline-block;
      background: #fdf6eb;
      color: #a87e34;
      border: 1px solid #f3e5c8;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
    }

    .empty-state p {
      color: #777;
      font-size: 1rem;
    }

    /* Footer */
    .dash-footer {
      padding: 2rem;
      text-align: center;
      font-size: 0.8rem;
      color: #777;
      line-height: 1.8;
    }

    @media (max-width: 600px) {
      .stats-bar { grid-template-columns: 1fr; padding: 1rem; }
      .dash-tabs { padding: 0 1rem; flex-wrap: wrap; }
      .dash-content { padding: 0 1rem 1rem 1rem; }
      .table-header { padding: 1.5rem; }
    }
  </style>
</head>
<body>

<?php if (!$is_logged_in): ?>
<div class="login-wrap">
  <div class="login-box">
    <div class="login-logo">
      <img src="logo.png" alt="KMC Logo" />
      <span>Alimunze</span>
      <small>Kasenge Miracle Centre Church · Admin</small>
    </div>
    <h2>Sign in to Dashboard</h2>

    <?php if ($login_error): ?>
      <div class="login-error"><?= htmlspecialchars($login_error) ?></div>
    <?php endif; ?>

    <form method="POST">
      <div class="form-field">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="admin" autocomplete="username" required />
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="••••••••" autocomplete="current-password" required />
      </div>
      <button type="submit" name="login" class="login-btn">
        Sign In
      </button>
    </form>
    <p style="margin-top:1.5rem;font-size:0.75rem;color:#777;text-align:center;">
      Default: username <strong>admin</strong> &nbsp;/&nbsp; password <strong>kmc2024</strong>
    </p>
  </div>
</div>

<?php else: ?>

<div class="dash-header">
  <div class="dash-brand">
    <img src="logo.png" alt="KMC Logo" />
    <div class="dash-brand-text">
      <span>Alimunze Admin</span>
      <small>Kasenge Miracle Centre Church</small>
    </div>
  </div>
  <div class="dash-header-right">
    <span class="dash-user">Logged in as <strong><?= htmlspecialchars($_SESSION['kmc_user']) ?></strong></span>
    <form method="POST" style="display:inline">
      <button type="submit" name="logout" class="logout-btn">Logout</button>
    </form>
  </div>
</div>

<div class="stats-bar">
  <div class="stat-card">
    <div class="stat-info">
      <span>Contact Messages</span>
      <strong><?= count($contacts) ?></strong>
    </div>
  </div>
  <div class="stat-card">
    <div class="stat-info">
      <span>Prayer Requests</span>
      <strong><?= count($prayers) ?></strong>
    </div>
  </div>
  <div class="stat-card">
    <div class="stat-info">
      <span>New Visitors</span>
      <strong><?= count($visitors) ?></strong>
    </div>
  </div>
</div>

<?php $tab = $_GET['tab'] ?? 'contacts'; ?>
<div class="dash-tabs">
  <a href="?tab=contacts" class="dash-tab <?= $tab === 'contacts' ? 'active' : '' ?>">
    Messages
    <?php if (count($contacts) > 0): ?><span class="tab-badge"><?= count($contacts) ?></span><?php endif; ?>
  </a>
  <a href="?tab=prayers" class="dash-tab <?= $tab === 'prayers' ? 'active' : '' ?>">
    Prayers
    <?php if (count($prayers) > 0): ?><span class="tab-badge"><?= count($prayers) ?></span><?php endif; ?>
  </a>
  <a href="?tab=visitors" class="dash-tab <?= $tab === 'visitors' ? 'active' : '' ?>">
    Visitors
    <?php if (count($visitors) > 0): ?><span class="tab-badge"><?= count($visitors) ?></span><?php endif; ?>
  </a>
</div>

<div class="dash-content">
  <div class="table-wrap">
    <?php if ($tab === 'contacts'): ?>
    <div class="table-header">
      <h2>Contact Messages</h2>
      <p>All messages submitted through the "I'm New Here" contact form</p>
    </div>
    
      <?php if (empty($contacts)): ?>
        <div class="empty-state">
          <p>No contact messages yet. They will appear here once people submit the form.</p>
        </div>
      <?php else: ?>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Visit Date</th>
            <th>Message</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($contacts as $c): ?>
          <tr>
            <td><span class="badge-id"><?= $c['id'] ?></span></td>
            <td><?= htmlspecialchars($c['first_name'] . ' ' . $c['last_name']) ?></td>
            <td class="td-muted"><?= htmlspecialchars($c['email']) ?></td>
            <td class="td-muted"><?= htmlspecialchars($c['phone'] ?: '—') ?></td>
            <td class="td-date td-muted"><?= $c['visit_date'] ?: '—' ?></td>
            <td class="td-message"><?= nl2br(htmlspecialchars($c['message'] ?: '—')) ?></td>
            <td class="td-date"><?= date('d M Y, H:i', strtotime($c['submitted_at'])) ?></td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
      <?php endif; ?>

    <?php elseif ($tab === 'prayers'): ?>
    <div class="table-header">
      <h2>Prayer Requests</h2>
      <p>All prayer requests submitted through the Prayer modal</p>
    </div>
    
      <?php if (empty($prayers)): ?>
        <div class="empty-state">
          <p>No prayer requests yet. They will appear here once people submit the prayer form.</p>
        </div>
      <?php else: ?>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Prayer Request</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($prayers as $p): ?>
          <tr>
            <td><span class="badge-id"><?= $p['id'] ?></span></td>
            <td><?= htmlspecialchars($p['full_name']) ?></td>
            <td class="td-message"><?= nl2br(htmlspecialchars($p['request'])) ?></td>
            <td class="td-date"><?= date('d M Y, H:i', strtotime($p['submitted_at'])) ?></td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
      <?php endif; ?>

    <?php elseif ($tab === 'visitors'): ?>
    <div class="table-header">
      <h2>New Visitor Sign-ups</h2>
      <p>People who signed up as first-time visitors</p>
    </div>
    
      <?php if (empty($visitors)): ?>
        <div class="empty-state">
          <p>No visitor sign-ups yet. They will appear here once people submit the visitor form.</p>
        </div>
      <?php else: ?>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>How They Heard</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($visitors as $v): ?>
          <tr>
            <td><span class="badge-id"><?= $v['id'] ?></span></td>
            <td><?= htmlspecialchars($v['full_name']) ?></td>
            <td class="td-muted"><?= htmlspecialchars($v['email'] ?: '—') ?></td>
            <td class="td-muted"><?= htmlspecialchars($v['phone'] ?: '—') ?></td>
            <td class="td-muted"><?= htmlspecialchars($v['how_heard'] ?: '—') ?></td>
            <td class="td-date"><?= date('d M Y, H:i', strtotime($v['submitted_at'])) ?></td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
      <?php endif; ?>
    <?php endif; ?>
  </div>
</div>

<div class="dash-footer">
  <p>Kasenge Miracle Centre Church — Alimunze &nbsp;·&nbsp; Admin Dashboard</p>
  <p>Project by <strong>Wasswa Makubuya Stephen</strong> &nbsp;|&nbsp; VU-CSF-2603-0849 &nbsp;|&nbsp; Supervised by Mr. Lutalo Sebastian</p>
</div>

<?php endif; ?>

</body>
</html>
