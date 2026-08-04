// ============================================
// Plano Scoop Tour — data + interactivity
// Hours below are approximate published hours;
// always sensible to call ahead on holidays.
// Day order: [Sun, Mon, Tue, Wed, Thu, Fri, Sat]
// ============================================

const CATEGORY_LABEL = {
  'soft-serve': 'Soft Serve',
  'gelato': 'Gelato',
  'homemade': 'Homemade',
  'asian-inspired': 'Asian-Inspired',
  'artisan': 'Artisan'
};

const STOPS = [
  {
    name: "Crispy Cones",
    category: "soft-serve",
    address: "9613 Coit Rd #108, Plano, TX 75024",
    phone: "+1 214-501-4263",
    rating: 4.4,
    ratingCount: 325,
    blurb: "Soft serve piped into a warm, custom-baked cone with your choice of toppings pressed in by hand. Flavors rotate weekly, so regulars come back to see what's new.",
    hours: [
      {open:"14:00", close:"21:00"}, // Sun
      {open:"12:00", close:"23:00"}, // Mon
      {open:"12:00", close:"23:00"}, // Tue
      {open:"12:00", close:"23:00"}, // Wed
      {open:"12:00", close:"23:00"}, // Thu
      {open:"12:00", close:"24:00"}, // Fri
      {open:"12:00", close:"24:00"}, // Sat
    ]
  },
  {
    name: "Local Creamery",
    category: "homemade",
    address: "5805 Preston Rd #598, Plano, TX 75093",
    phone: "+1 469-468-3768",
    rating: 4.8,
    ratingCount: 564,
    blurb: "Small-batch flavors made with genuinely organic ingredients, plus a solid dairy-free lineup. Expect a line on weekends — it moves fast.",
    hours: Array(7).fill({open:"12:00", close:"23:00"})
  },
  {
    name: "Sugar Pine Creamery",
    category: "soft-serve",
    address: "6832 Coit Rd #270b, Plano, TX 75023",
    phone: "+1 469-298-8864",
    rating: 4.9,
    ratingCount: 455,
    blurb: "Adventurous weekly flavor drops — think horchata, orange jasmine, Thai tea — served with samples offered before you order. Closed Mondays.",
    hours: [
      {open:"14:00", close:"18:00"}, // Sun
      null, // Mon closed
      {open:"14:00", close:"20:00"}, // Tue
      {open:"14:00", close:"20:00"}, // Wed
      {open:"14:00", close:"20:00"}, // Thu
      {open:"14:00", close:"20:00"}, // Fri
      {open:"14:00", close:"20:00"}, // Sat
    ]
  },
  {
    name: "MILKYTREATS ICE CREAM",
    category: "soft-serve",
    address: "7000 Independence Pkwy #104d, Plano, TX 75025",
    phone: "+1 214-718-6652",
    rating: 4.7,
    ratingCount: 669,
    blurb: "Playful cereal-milk infusions and a scoop-stuffed donut sandwich. Late-night hours on Friday and Saturday make it the after-dinner stop.",
    hours: [
      {open:"14:00", close:"23:00"}, // Sun
      {open:"14:00", close:"22:00"}, // Mon
      {open:"14:00", close:"22:00"}, // Tue
      {open:"14:00", close:"22:00"}, // Wed
      {open:"14:00", close:"22:00"}, // Thu
      {open:"14:00", close:"26:00"}, // Fri (2am)
      {open:"14:00", close:"26:00"}, // Sat (2am)
    ]
  },
  {
    name: "Churn and Bake Ice Cream",
    category: "asian-inspired",
    address: "2707 W 15th St Ste c, Plano, TX 75075",
    phone: "+1 469-277-6098",
    rating: 4.8,
    ratingCount: 640,
    blurb: "An Asian-inspired creamery known for ube coconut crunch, pandan, and yuzu, alongside milk tea and smoothies. Ask for a flight to sample several at once.",
    hours: [
      {open:"12:00", close:"22:00"}, // Sun
      {open:"14:00", close:"22:00"}, // Mon
      {open:"14:00", close:"22:00"}, // Tue
      {open:"14:00", close:"22:00"}, // Wed
      {open:"14:00", close:"22:00"}, // Thu
      {open:"12:00", close:"22:00"}, // Fri
      {open:"12:00", close:"22:00"}, // Sat
    ]
  },
  {
    name: "Botolino Gelato Artigianale",
    category: "gelato",
    address: "2201 Preston Rd Ste O, Plano, TX 75093",
    phone: "+1 214-440-2258",
    rating: 4.9,
    ratingCount: 172,
    blurb: "Italian-style gelato made in small batches, with a coffee affogato worth the trip alone. Tastings offered before you commit to a flavor.",
    hours: [
      {open:"12:00", close:"22:00"}, // Sun
      {open:"12:00", close:"22:00"}, // Mon
      {open:"12:00", close:"22:00"}, // Tue
      {open:"12:00", close:"22:00"}, // Wed
      {open:"12:00", close:"22:00"}, // Thu
      {open:"12:00", close:"23:00"}, // Fri
      {open:"12:00", close:"23:00"}, // Sat
    ]
  },
  {
    name: "Handel's Ice Cream",
    category: "artisan",
    address: "4200 Legacy Dr, Plano, TX 75024",
    phone: "+1 972-208-4051",
    rating: 4.8,
    ratingCount: 839,
    blurb: "A Legacy West staple with a famously loaded cookie dough scoop and generous, well-run sampling before you order. Reliable every time.",
    hours: Array(7).fill({open:"11:00", close:"22:00"})
  },
  {
    name: "Henry's Homemade Ice Cream",
    category: "homemade",
    address: "3100 Independence Pkwy, Plano, TX 75075",
    phone: "+1 972-943-3639",
    rating: 4.5,
    ratingCount: 1006,
    blurb: "Old-school homemade flavors and custom ice cream cakes, in business for decades. Spumoni with pistachio and cherry is a local favorite.",
    hours: [
      {open:"11:00", close:"21:00"}, // Sun
      {open:"11:00", close:"21:00"}, // Mon
      {open:"11:00", close:"21:00"}, // Tue
      {open:"11:00", close:"21:00"}, // Wed
      {open:"11:00", close:"21:00"}, // Thu
      {open:"11:00", close:"21:30"}, // Fri
      {open:"11:00", close:"21:30"}, // Sat
    ]
  },
  {
    name: "I Scream Gelato",
    category: "gelato",
    address: "5880 State Hwy 121 Suite 102 A, Plano, TX 75024",
    phone: "+1 945-319-9711",
    rating: 4.5,
    ratingCount: 384,
    blurb: "A vegan-friendly gelato counter tucked into Granite Park Boardwalk, with indoor and outdoor seating for a slower stop on the tour.",
    hours: [
      {open:"12:00", close:"22:00"}, // Sun
      {open:"13:00", close:"22:00"}, // Mon
      {open:"13:00", close:"22:00"}, // Tue
      {open:"13:00", close:"22:00"}, // Wed
      {open:"13:00", close:"22:00"}, // Thu
      {open:"13:00", close:"23:00"}, // Fri
      {open:"12:00", close:"23:00"}, // Sat
    ]
  },
  {
    name: "Tongue in Cheek Ice Cream",
    category: "artisan",
    address: "3505 E Park Blvd #300, Plano, TX 75074",
    phone: "+1 469-661-8001",
    rating: 4.7,
    ratingCount: 378,
    blurb: "Everything made from scratch on site, eaten from a porch swing seat if you can snag one. Caramel Crack is the one people drive back for.",
    hours: [
      {open:"12:00", close:"21:00"}, // Sun
      {open:"11:00", close:"21:00"}, // Mon
      {open:"11:00", close:"21:00"}, // Tue
      {open:"11:00", close:"21:00"}, // Wed
      {open:"11:00", close:"21:00"}, // Thu
      {open:"11:00", close:"22:00"}, // Fri
      {open:"11:00", close:"22:00"}, // Sat
    ]
  }
];

const LID_COLOR = {
  'soft-serve': 'var(--soft-serve)',
  'gelato': 'var(--gelato)',
  'homemade': 'var(--homemade)',
  'asian-inspired': 'var(--asian)',
  'artisan': 'var(--artisan)'
};

function initials(name) {
  return name.split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

function statusFor(hoursToday) {
  if (!hoursToday) return { open: false, label: "Closed today" };
  const now = new Date();
  const mins = now.getHours() * 60 + now.getMinutes();
  const [oh, om] = hoursToday.open.split(':').map(Number);
  const [ch, cm] = hoursToday.close.split(':').map(Number);
  const openMins = oh * 60 + om;
  const closeMins = ch * 60 + cm; // may exceed 1440 for after-midnight
  const isOpen = mins >= openMins && mins < closeMins;
  const fmt = (h, m) => {
    const hh = h % 24;
    const period = hh >= 12 ? 'PM' : 'AM';
    let h12 = hh % 12; if (h12 === 0) h12 = 12;
    return `${h12}:${String(m).padStart(2,'0')}${period}`;
  };
  if (isOpen) {
    return { open: true, label: `Open now · closes ${fmt(ch, cm)}` };
  }
  return { open: false, label: `Closed · opens ${fmt(oh, om)}` };
}

function mapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function renderStops(list) {
  const container = document.getElementById('stops');
  const strip = document.getElementById('routestrip-track');
  container.innerHTML = '';
  strip.innerHTML = '';

  list.forEach((stop, i) => {
    const day = new Date().getDay();
    const status = statusFor(stop.hours[day]);
    const id = `stop-${i}`;

    const card = document.createElement('article');
    card.className = 'stopcard';
    card.id = id;
    card.dataset.category = stop.category;

    card.innerHTML = `
      <div class="lid" style="background:${LID_COLOR[stop.category]}">${initials(stop.name)}</div>
      <div class="stop-body">
        <div class="stop-head">
          <h2>${i + 1}. ${stop.name}</h2>
          <span class="rating">★ ${stop.rating.toFixed(1)} (${stop.ratingCount.toLocaleString()})</span>
        </div>
        <span class="tag" style="background:${LID_COLOR[stop.category]}">${CATEGORY_LABEL[stop.category]}</span>
        <p class="blurb">${stop.blurb}</p>
        <div class="stop-meta">
          <span><strong>Address</strong> ${stop.address}</span>
          <span class="status ${status.open ? 'open' : 'closed'}">${status.label}</span>
        </div>
        <div class="stop-actions">
          <a class="primary" href="${mapsUrl(stop.address)}" target="_blank" rel="noopener">Get directions</a>
          <a href="tel:${stop.phone.replace(/[^+\d]/g, '')}">${stop.phone}</a>
        </div>
      </div>
    `;
    container.appendChild(card);

    const dot = document.createElement('a');
    dot.className = 'route-dot';
    dot.href = `#${id}`;
    dot.textContent = `${i + 1} · ${stop.name.split(' ')[0]}`;
    strip.appendChild(dot);
  });

  document.getElementById('stat-count').textContent = list.length;
}

function applyFilter(category) {
  const cards = document.querySelectorAll('.stopcard');
  cards.forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.hidden = !match;
  });
  const visibleCount = category === 'all'
    ? STOPS.length
    : STOPS.filter(s => s.category === category).length;
  document.getElementById('stat-count').textContent = visibleCount;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

document.addEventListener('DOMContentLoaded', () => {
  renderStops(STOPS);

  document.getElementById('chipnav').addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
    btn.classList.add('is-active');
    applyFilter(btn.dataset.filter);
  });

  document.getElementById('shuffleBtn').addEventListener('click', () => {
    const shuffled = shuffle(STOPS);
    renderStops(shuffled);
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
    document.querySelector('.chip[data-filter="all"]').classList.add('is-active');
    document.getElementById('route').scrollIntoView({ behavior: 'smooth' });
  });
});
