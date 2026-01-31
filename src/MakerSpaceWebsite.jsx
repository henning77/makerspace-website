import React, { useState, useEffect, useRef } from 'react';

const MakerSpaceWebsite = () => {
  // Settings
  const [settings, setSettings] = useState({
    sound: true,
    notifications: false,
    darkMode: true,
    fontSize: 'normal',
    language: 'de'
  });
  const [showSettings, setShowSettings] = useState(false);

  // Translations
  const translations = {
    de: {
      nav: { services: 'Leistungen', gallery: 'Galerie', chat: 'Chat', reviews: 'Bewertungen', contact: 'Kontakt', orders: 'Aufträge', settings: 'Einstellungen' },
      hero: { badge: 'Schulprojekt mit echtem Service', title1: 'Wir bauen.', title2: 'Wir reparieren.', subtitle: 'Dein Wunschprodukt oder eine Reparatur? Schreib uns!', cta: 'ANFRAGE STELLEN' },
      stats: { projects: 'Projekte', customers: 'Kunden', satisfaction: 'Zufriedenheit' },
      services: { title: 'Was wir anbieten', product: 'Individuelle Produkte', productDesc: 'Du hast eine Idee? Wir setzen sie um!', repair: 'Reparaturen', repairDesc: 'Kaputt heißt nicht Müll!' },
      form: { name: 'Dein Name', email: 'E-Mail', type: 'Was brauchst du?', product: 'Produkt', repair: 'Reparatur', color: 'Gewünschte Farbe', size: 'Größe/Maße', material: 'Material', description: 'Beschreib dein Anliegen', photos: 'Fotos hinzufügen', maxPhotos: 'Max. 5 Bilder', send: 'NACHRICHT SENDEN', sent: 'Gesendet!', sentDesc: 'Wir melden uns.' },
      chat: { title: 'Live Chat', public: 'Öffentlich', private: 'Privat', publicDesc: 'Jeder kann lesen & schreiben', privateDesc: 'Nur du und das Team', onlyCustomers: 'Nur für verifizierte Kunden', yourName: 'Dein Name', message: 'Nachricht schreiben...', send: 'Senden', noMessages: 'Noch keine Nachrichten.' },
      reviews: { title: 'Kundenstimmen', write: 'Bewertung schreiben', onlyCustomers: 'Nur für verifizierte Kunden', yourReview: 'Deine Bewertung', submit: 'ABSENDEN', thanks: 'Danke!', online: 'Online.' },
      orders: { title: 'Deine Aufträge', noOrders: 'Noch keine Aufträge.', status: { received: 'Eingegangen', processing: 'In Bearbeitung', done: 'Fertig zur Abholung' } },
      settings: { title: 'Einstellungen', sound: 'Ton', soundOn: 'An', soundOff: 'Aus', notifications: 'Mitteilungen', notificationsOn: 'An', notificationsOff: 'Aus', theme: 'Design', dark: 'Dunkel', light: 'Hell', fontSize: 'Schriftgröße', small: 'Klein', normal: 'Normal', large: 'Groß', language: 'Sprache' },
      footer: { copyright: '© 2025 • Schüler*innen', recommend: 'Empfehlen Sie uns gerne weiter! 💛' }
    },
    en: {
      nav: { services: 'Services', gallery: 'Gallery', chat: 'Chat', reviews: 'Reviews', contact: 'Contact', orders: 'Orders', settings: 'Settings' },
      hero: { badge: 'School project with real service', title1: 'We build.', title2: 'We repair.', subtitle: 'Custom product or repair? Just write us!', cta: 'SEND REQUEST' },
      stats: { projects: 'Projects', customers: 'Customers', satisfaction: 'Satisfaction' },
      services: { title: 'What we offer', product: 'Custom Products', productDesc: 'You have an idea? We make it happen!', repair: 'Repairs', repairDesc: 'Broken doesn\'t mean trash!' },
      form: { name: 'Your Name', email: 'Email', type: 'What do you need?', product: 'Product', repair: 'Repair', color: 'Preferred Color', size: 'Size/Dimensions', material: 'Material', description: 'Describe your request', photos: 'Add Photos', maxPhotos: 'Max. 5 images', send: 'SEND MESSAGE', sent: 'Sent!', sentDesc: 'We\'ll get back to you.' },
      chat: { title: 'Live Chat', public: 'Public', private: 'Private', publicDesc: 'Everyone can read & write', privateDesc: 'Only you and the team', onlyCustomers: 'Only for verified customers', yourName: 'Your Name', message: 'Write message...', send: 'Send', noMessages: 'No messages yet.' },
      reviews: { title: 'Customer Reviews', write: 'Write Review', onlyCustomers: 'Only for verified customers', yourReview: 'Your Review', submit: 'SUBMIT', thanks: 'Thanks!', online: 'Online.' },
      orders: { title: 'Your Orders', noOrders: 'No orders yet.', status: { received: 'Received', processing: 'In Progress', done: 'Ready for Pickup' } },
      settings: { title: 'Settings', sound: 'Sound', soundOn: 'On', soundOff: 'Off', notifications: 'Notifications', notificationsOn: 'On', notificationsOff: 'Off', theme: 'Theme', dark: 'Dark', light: 'Light', fontSize: 'Font Size', small: 'Small', normal: 'Normal', large: 'Large', language: 'Language' },
      footer: { copyright: '© 2025 • Students', recommend: 'Please recommend us! 💛' }
    },
    es: {
      nav: { services: 'Servicios', gallery: 'Galería', chat: 'Chat', reviews: 'Reseñas', contact: 'Contacto', orders: 'Pedidos', settings: 'Ajustes' },
      hero: { badge: 'Proyecto escolar con servicio real', title1: 'Construimos.', title2: 'Reparamos.', subtitle: '¿Producto personalizado o reparación? ¡Escríbenos!', cta: 'ENVIAR SOLICITUD' },
      stats: { projects: 'Proyectos', customers: 'Clientes', satisfaction: 'Satisfacción' },
      services: { title: 'Lo que ofrecemos', product: 'Productos Personalizados', productDesc: '¿Tienes una idea? ¡La hacemos realidad!', repair: 'Reparaciones', repairDesc: '¡Roto no significa basura!' },
      form: { name: 'Tu Nombre', email: 'Correo', type: '¿Qué necesitas?', product: 'Producto', repair: 'Reparación', color: 'Color deseado', size: 'Tamaño', material: 'Material', description: 'Describe tu solicitud', photos: 'Añadir Fotos', maxPhotos: 'Máx. 5 imágenes', send: 'ENVIAR MENSAJE', sent: '¡Enviado!', sentDesc: 'Te contactaremos.' },
      chat: { title: 'Chat en Vivo', public: 'Público', private: 'Privado', publicDesc: 'Todos pueden leer y escribir', privateDesc: 'Solo tú y el equipo', onlyCustomers: 'Solo para clientes verificados', yourName: 'Tu nombre', message: 'Escribe mensaje...', send: 'Enviar', noMessages: 'Sin mensajes aún.' },
      reviews: { title: 'Reseñas', write: 'Escribir Reseña', onlyCustomers: 'Solo para clientes verificados', yourReview: 'Tu Reseña', submit: 'ENVIAR', thanks: '¡Gracias!', online: 'En línea.' },
      orders: { title: 'Tus Pedidos', noOrders: 'Sin pedidos aún.', status: { received: 'Recibido', processing: 'En Proceso', done: 'Listo para Recoger' } },
      settings: { title: 'Ajustes', sound: 'Sonido', soundOn: 'On', soundOff: 'Off', notifications: 'Notificaciones', notificationsOn: 'On', notificationsOff: 'Off', theme: 'Tema', dark: 'Oscuro', light: 'Claro', fontSize: 'Tamaño de Fuente', small: 'Pequeño', normal: 'Normal', large: 'Grande', language: 'Idioma' },
      footer: { copyright: '© 2025 • Estudiantes', recommend: '¡Recomiéndanos! 💛' }
    },
    fr: {
      nav: { services: 'Services', gallery: 'Galerie', chat: 'Chat', reviews: 'Avis', contact: 'Contact', orders: 'Commandes', settings: 'Paramètres' },
      hero: { badge: 'Projet scolaire avec vrai service', title1: 'On construit.', title2: 'On répare.', subtitle: 'Produit personnalisé ou réparation? Écris-nous!', cta: 'ENVOYER DEMANDE' },
      stats: { projects: 'Projets', customers: 'Clients', satisfaction: 'Satisfaction' },
      services: { title: 'Ce qu\'on offre', product: 'Produits Personnalisés', productDesc: 'Tu as une idée? On la réalise!', repair: 'Réparations', repairDesc: 'Cassé ne veut pas dire poubelle!' },
      form: { name: 'Ton Nom', email: 'Email', type: 'De quoi as-tu besoin?', product: 'Produit', repair: 'Réparation', color: 'Couleur souhaitée', size: 'Taille', material: 'Matériel', description: 'Décris ta demande', photos: 'Ajouter Photos', maxPhotos: 'Max. 5 images', send: 'ENVOYER', sent: 'Envoyé!', sentDesc: 'On te recontacte.' },
      chat: { title: 'Chat en Direct', public: 'Public', private: 'Privé', publicDesc: 'Tout le monde peut lire et écrire', privateDesc: 'Seulement toi et l\'équipe', onlyCustomers: 'Seulement pour clients vérifiés', yourName: 'Ton nom', message: 'Écrire message...', send: 'Envoyer', noMessages: 'Pas de messages.' },
      reviews: { title: 'Avis Clients', write: 'Écrire Avis', onlyCustomers: 'Seulement pour clients vérifiés', yourReview: 'Ton Avis', submit: 'ENVOYER', thanks: 'Merci!', online: 'En ligne.' },
      orders: { title: 'Tes Commandes', noOrders: 'Pas de commandes.', status: { received: 'Reçue', processing: 'En Cours', done: 'Prête' } },
      settings: { title: 'Paramètres', sound: 'Son', soundOn: 'On', soundOff: 'Off', notifications: 'Notifications', notificationsOn: 'On', notificationsOff: 'Off', theme: 'Thème', dark: 'Sombre', light: 'Clair', fontSize: 'Taille Police', small: 'Petit', normal: 'Normal', large: 'Grand', language: 'Langue' },
      footer: { copyright: '© 2025 • Élèves', recommend: 'Recommandez-nous! 💛' }
    }
  };

  const t = translations[settings.language] || translations.de;

  // Font size values
  const fontSizes = { small: '14px', normal: '16px', large: '18px' };

  // Theme colors
  const theme = settings.darkMode ? {
    bg: '#0f0f0f', bgAlt: '#141414', bgCard: '#1a1a1a', border: '#2a2a2a', text: '#f5f5f5', textMuted: '#888', textDark: '#555'
  } : {
    bg: '#f5f5f5', bgAlt: '#ffffff', bgCard: '#ffffff', border: '#e0e0e0', text: '#1a1a1a', textMuted: '#666', textDark: '#999'
  };

  // Basic states
  const [formData, setFormData] = useState({ name: '', email: '', type: 'produkt', color: '', size: '', material: '', message: '' });
  const [formImages, setFormImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({ name: '', message: '' });
  const [reviewStatus, setReviewStatus] = useState(null);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [isCustomer, setIsCustomer] = useState(false);
  const [checkingCustomer, setCheckingCustomer] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminSetup, setShowAdminSetup] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [galleryType, setGalleryType] = useState('produkt');
  const [newGalleryItem, setNewGalleryItem] = useState({ title: '', description: '', imageUrl: '', beforeUrl: '', afterUrl: '' });
  const [sliderPositions, setSliderPositions] = useState({});
  const [newCodeGenerated, setNewCodeGenerated] = useState(null);
  const [publicMessages, setPublicMessages] = useState([]);
  const [publicChatInput, setPublicChatInput] = useState('');
  const [publicChatName, setPublicChatName] = useState('');
  const [publicChatNameSet, setPublicChatNameSet] = useState(false);
  const [sendingPublic, setSendingPublic] = useState(false);
  const [loadingPublicChat, setLoadingPublicChat] = useState(true);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [privateChatInput, setPrivateChatInput] = useState('');
  const [sendingPrivate, setSendingPrivate] = useState(false);
  const [loadingPrivateChat, setLoadingPrivateChat] = useState(true);
  const [customerName, setCustomerName] = useState('');
  const [customerNameSet, setCustomerNameSet] = useState(false);
  const [activeChatTab, setActiveChatTab] = useState('public');
  const [deviceId, setDeviceId] = useState('');

  // Orders
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // Animated stats
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, customers: 0, satisfaction: 0 });
  const statsRef = useRef(null);

  // Previous message count for notification
  const prevMessageCount = useRef(0);

  // Load settings from storage
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const result = await window.storage.get('makerspace-settings');
        if (result && result.value) setSettings(JSON.parse(result.value));
      } catch (e) {}
    };
    loadSettings();
  }, []);

  // Save settings
  const updateSettings = async (newSettings) => {
    setSettings(newSettings);
    try { await window.storage.set('makerspace-settings', JSON.stringify(newSettings)); } catch (e) {}
  };

  // Play notification sound
  const playNotificationSound = () => {
    if (!settings.sound) return;
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.frequency.value = 800;
      oscillator.type = 'sine';
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {}
  };

  // Request notification permission
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  };

  // Send browser notification
  const sendNotification = (title, body) => {
    if (!settings.notifications) return;
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, { body, icon: '🔨' });
    }
  };

  // Toggle notifications
  const toggleNotifications = async (enabled) => {
    if (enabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        updateSettings({ ...settings, notifications: true });
      } else {
        alert('Bitte erlaube Mitteilungen in deinen Browser-Einstellungen.');
      }
    } else {
      updateSettings({ ...settings, notifications: false });
    }
  };

  // Scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Animated stats observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !statsVisible) setStatsVisible(true); },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  // Animate stats when visible
  useEffect(() => {
    if (!statsVisible) return;
    const targets = { projects: 50, customers: 30, satisfaction: 100 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedStats({
        projects: Math.round(targets.projects * eased),
        customers: Math.round(targets.customers * eased),
        satisfaction: Math.round(targets.satisfaction * eased)
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [statsVisible]);

  // Initialize device ID
  useEffect(() => {
    const init = async () => {
      try {
        let id = null;
        const result = await window.storage.get('makerspace-device-id');
        if (result?.value) id = result.value;
        else {
          id = 'D' + Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
          await window.storage.set('makerspace-device-id', id);
        }
        setDeviceId(id);
      } catch (e) { setDeviceId('anon-' + Math.random().toString(36).substring(2, 8)); }
    };
    init();
  }, []);

  // Check QR code
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('kunde');
    if (code) verifyCustomer(code);
  }, []);

  const verifyCustomer = async (code) => {
    try {
      const result = await window.storage.get('makerspace-valid-codes', true);
      if (result?.value) {
        const codes = JSON.parse(result.value);
        if (codes.includes(code)) {
          await window.storage.set('makerspace-is-customer', 'verified');
          setIsCustomer(true);
          await window.storage.set('makerspace-valid-codes', JSON.stringify(codes.filter(c => c !== code)), true);
          alert('✅ Du bist jetzt als Kunde verifiziert!');
          window.history.replaceState({}, '', window.location.pathname);
        }
      }
    } catch (e) {}
  };

  // Check customer
  useEffect(() => {
    const check = async () => {
      try {
        const result = await window.storage.get('makerspace-is-customer');
        if (result?.value === 'verified') setIsCustomer(true);
        const nameResult = await window.storage.get('makerspace-customer-name');
        if (nameResult?.value) { setCustomerName(nameResult.value); setCustomerNameSet(true); }
      } catch (e) {}
      setCheckingCustomer(false);
    };
    check();
  }, []);

  // Check admin
  useEffect(() => {
    const check = async () => {
      try {
        const result = await window.storage.get('makerspace-admin-token');
        if (result?.value === 'team-computer-authorized') setIsAdmin(true);
      } catch (e) {}
    };
    check();
  }, []);

  // Load public chat name
  useEffect(() => {
    const load = async () => {
      try {
        const result = await window.storage.get('makerspace-public-chat-name');
        if (result?.value) { setPublicChatName(result.value); setPublicChatNameSet(true); }
      } catch (e) {}
    };
    load();
  }, []);

  // Load data
  useEffect(() => {
    const load = async () => {
      try {
        const r = await window.storage.get('makerspace-gallery', true);
        if (r?.value) setGalleryItems(JSON.parse(r.value));
      } catch (e) {}
      setLoadingGallery(false);
    };
    load();
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const r = await window.storage.get('makerspace-reviews', true);
        if (r?.value) setReviews(JSON.parse(r.value));
      } catch (e) {}
      setLoadingReviews(false);
    };
    load();
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const r = await window.storage.get('makerspace-public-chat', true);
        if (r?.value) {
          const msgs = JSON.parse(r.value);
          if (msgs.length > prevMessageCount.current && prevMessageCount.current > 0) {
            playNotificationSound();
            const lastMsg = msgs[msgs.length - 1];
            sendNotification('💬 Neue Nachricht', `${lastMsg.name}: ${lastMsg.text.substring(0, 50)}`);
          }
          prevMessageCount.current = msgs.length;
          setPublicMessages(msgs);
        }
      } catch (e) {}
      setLoadingPublicChat(false);
    };
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, [settings.sound, settings.notifications]);

  useEffect(() => {
    if (!deviceId) return;
    const load = async () => {
      try {
        const r = await window.storage.get(`makerspace-private-chat-${deviceId}`, true);
        if (r?.value) setPrivateMessages(JSON.parse(r.value));
      } catch (e) {}
      setLoadingPrivateChat(false);
    };
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, [deviceId]);

  // Load orders
  useEffect(() => {
    if (!deviceId) return;
    const load = async () => {
      try {
        const r = await window.storage.get(`makerspace-orders-${deviceId}`, true);
        if (r?.value) setOrders(JSON.parse(r.value));
      } catch (e) {}
      setLoadingOrders(false);
    };
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, [deviceId]);

  // Moderation
  const moderate = async (text) => {
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 100,
          messages: [{ role: "user", content: `Prüfe diese Nachricht. Antworte NUR "OK" oder "BLOCK". BLOCK bei: beleidigend, Spam, Schimpfwörter, Hassrede. OK bei: normal, freundlich.\n\n"${text}"` }]
        })
      });
      const data = await r.json();
      return data.content[0].text.toUpperCase().includes('OK');
    } catch (e) { return true; }
  };

  // Send public message
  const sendPublicMessage = async (e) => {
    e.preventDefault();
    if (!publicChatInput.trim() || !publicChatName.trim()) return;
    setSendingPublic(true);
    const isOk = isAdmin ? true : await moderate(publicChatInput);
    if (isOk) {
      const msg = { id: Date.now(), name: publicChatName, text: publicChatInput, time: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }), isAdmin };
      const updated = [...publicMessages, msg].slice(-50);
      setPublicMessages(updated);
      try { await window.storage.set('makerspace-public-chat', JSON.stringify(updated), true); } catch (e) {}
    } else { alert('Nachricht blockiert (Schimpfwörter o.ä.)'); }
    setPublicChatInput('');
    setSendingPublic(false);
  };

  const savePublicChatName = async () => {
    if (publicChatName.trim()) {
      try { await window.storage.set('makerspace-public-chat-name', publicChatName.trim()); } catch (e) {}
      setPublicChatNameSet(true);
    }
  };

  // Send private message
  const sendPrivateMessage = async (e) => {
    e.preventDefault();
    if (!privateChatInput.trim() || !deviceId) return;
    setSendingPrivate(true);
    const msg = { id: Date.now(), from: isAdmin ? 'team' : 'kunde', name: isAdmin ? 'Maker Space Team' : customerName, text: privateChatInput, time: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) };
    const updated = [...privateMessages, msg];
    setPrivateMessages(updated);
    try { await window.storage.set(`makerspace-private-chat-${deviceId}`, JSON.stringify(updated), true); } catch (e) {}
    setPrivateChatInput('');
    setSendingPrivate(false);
  };

  const saveCustomerName = async () => {
    if (customerName.trim()) {
      try { await window.storage.set('makerspace-customer-name', customerName.trim()); } catch (e) {}
      setCustomerNameSet(true);
    }
  };

  // Admin setup
  const setupAdmin = async () => {
    try {
      await window.storage.set('makerspace-admin-token', 'team-computer-authorized');
      setIsAdmin(true);
      setShowAdminSetup(false);
      alert('✅ Team-Computer eingerichtet!');
    } catch (e) {}
  };

  const removeAdmin = async () => {
    if (confirm('Admin-Rechte entfernen?')) {
      try { await window.storage.delete('makerspace-admin-token'); setIsAdmin(false); } catch (e) {}
    }
  };

  // QR Code
  const generateCode = async () => {
    const code = 'K' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
    try {
      let codes = [];
      const r = await window.storage.get('makerspace-valid-codes', true);
      if (r?.value) codes = JSON.parse(r.value);
      codes.push(code);
      await window.storage.set('makerspace-valid-codes', JSON.stringify(codes), true);
      setNewCodeGenerated(code);
    } catch (e) {}
  };

  const getQRUrl = (code) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`${window.location.origin}${window.location.pathname}?kunde=${code}`)}`;

  // Image upload for gallery
  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 800000) { alert('Bild zu groß! Max 800KB'); return; }
      const reader = new FileReader();
      reader.onloadend = () => setNewGalleryItem({ ...newGalleryItem, [field]: reader.result });
      reader.readAsDataURL(file);
    }
  };

  // Image upload for contact form
  const handleFormImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (formImages.length + files.length > 5) {
      alert('Maximal 5 Bilder!');
      return;
    }
    files.forEach(file => {
      if (file.size > 800000) { alert(`${file.name} zu groß! Max 800KB`); return; }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormImages(prev => [...prev, { id: Date.now() + Math.random(), data: reader.result, name: file.name }]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Remove form image
  const removeFormImage = (id) => {
    setFormImages(prev => prev.filter(img => img.id !== id));
  };

  // Share gallery item
  const shareGalleryItem = async (item) => {
    const shareData = {
      title: item.title,
      text: `Schau dir dieses Projekt vom Maker Space an: ${item.title}`,
      url: window.location.href
    };
    
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {}
    } else {
      // Fallback: copy link
      navigator.clipboard.writeText(window.location.href);
      alert('Link kopiert! 📋');
    }
  };

  // Add gallery item
  const addGalleryItem = async (e) => {
    e.preventDefault();
    if (galleryType === 'vorher-nachher' ? (!newGalleryItem.beforeUrl || !newGalleryItem.afterUrl) : !newGalleryItem.imageUrl) {
      alert('Bild(er) hochladen!'); return;
    }
    const item = { id: Date.now(), ...newGalleryItem, isBeforeAfter: galleryType === 'vorher-nachher', date: new Date().toLocaleDateString('de-DE') };
    const updated = [item, ...galleryItems];
    setGalleryItems(updated);
    try { await window.storage.set('makerspace-gallery', JSON.stringify(updated), true); } catch (e) {}
    setNewGalleryItem({ title: '', description: '', imageUrl: '', beforeUrl: '', afterUrl: '' });
  };

  const deleteGalleryItem = async (id) => {
    if (confirm('Löschen?')) {
      const updated = galleryItems.filter(i => i.id !== id);
      setGalleryItems(updated);
      try { await window.storage.set('makerspace-gallery', JSON.stringify(updated), true); } catch (e) {}
    }
  };

  // Toggle beliebt/favorite status
  const toggleFavorite = async (id) => {
    const updated = galleryItems.map(item => 
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setGalleryItems(updated);
    try { await window.storage.set('makerspace-gallery', JSON.stringify(updated), true); } catch (e) {}
  };

  // Review
  const analyzeReview = async (text) => {
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 100, messages: [{ role: "user", content: `Bewertung positiv oder negativ? Nur "POSITIV" oder "NEGATIV".\n\n"${text}"` }] })
      });
      const data = await r.json();
      return data.content[0].text.toUpperCase().includes('POSITIV');
    } catch (e) { return true; }
  };

  const submitReview = async (e) => {
    e.preventDefault();
    setReviewStatus('loading');
    const isPos = await analyzeReview(reviewForm.message);
    if (isPos) {
      const review = { id: Date.now(), name: reviewForm.name, message: reviewForm.message, date: new Date().toLocaleDateString('de-DE') };
      const updated = [...reviews, review];
      setReviews(updated);
      try { await window.storage.set('makerspace-reviews', JSON.stringify(updated), true); } catch (e) {}
      setReviewStatus('approved');
    } else { setReviewStatus('rejected'); }
    setReviewForm({ name: '', message: '' });
  };

  // Submit order form
  const submitForm = async (e) => {
    e.preventDefault();
    // Create order
    const order = {
      id: 'MS-' + Date.now().toString(36).toUpperCase(),
      ...formData,
      images: formImages,
      status: 'received',
      date: new Date().toLocaleDateString('de-DE')
    };
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    try { await window.storage.set(`makerspace-orders-${deviceId}`, JSON.stringify(updatedOrders), true); } catch (e) {}
    setSubmitted(true);
    setFormImages([]);
  };

  // Admin: Update order status
  const updateOrderStatus = async (orderId, newStatus) => {
    const updated = orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o);
    setOrders(updated);
    try { await window.storage.set(`makerspace-orders-${deviceId}`, JSON.stringify(updated), true); } catch (e) {}
  };

  // Before/After Slider
  const BeforeAfterSlider = ({ beforeUrl, afterUrl, id }) => {
    const pos = sliderPositions[id] || 50;
    return (
      <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', overflow: 'hidden', borderRadius: '8px', cursor: 'ew-resize' }}
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setSliderPositions({ ...sliderPositions, [id]: Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)) }); }}
        onTouchMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setSliderPositions({ ...sliderPositions, [id]: Math.max(0, Math.min(100, ((e.touches[0].clientX - r.left) / r.width) * 100)) }); }}>
        <img src={afterUrl} alt="After" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: `${pos}%`, height: '100%', overflow: 'hidden' }}>
          <img src={beforeUrl} alt="Before" style={{ position: 'absolute', top: 0, left: 0, width: `${100 / (pos / 100)}%`, height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'absolute', top: 0, left: `${pos}%`, width: '3px', height: '100%', background: '#ffc832', transform: 'translateX(-50%)' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', background: '#ffc832', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000' }}>↔</div>
        </div>
        <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', padding: '5px 10px', borderRadius: '5px', fontSize: '0.75rem', color: '#fff' }}>VORHER</span>
        <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#4ecdc4', padding: '5px 10px', borderRadius: '5px', fontSize: '0.75rem', color: '#000' }}>NACHHER</span>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, fontFamily: "'Space Mono', 'Courier New', monospace", color: theme.text, fontSize: fontSizes[settings.fontSize] }}>
      {/* Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: settings.darkMode ? `radial-gradient(circle at 20% 50%, rgba(255,200,50,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(78,205,196,0.05) 0%, transparent 50%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)` : 'none', backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px', pointerEvents: 'none', zIndex: 0 }} />

      {/* Admin Bar */}
      {isAdmin && (
        <div style={{ background: 'linear-gradient(90deg, #4ecdc4, #44a08d)', padding: '10px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#000' }}>
          <span>🔓 <strong>Team-Modus</strong></span>
          <button onClick={removeAdmin} style={{ background: 'rgba(0,0,0,0.2)', border: 'none', padding: '5px 12px', borderRadius: '5px', color: '#fff', cursor: 'pointer' }}>Abmelden</button>
        </div>
      )}

      {/* Customer Bar */}
      {isCustomer && !isAdmin && (
        <div style={{ background: 'linear-gradient(90deg, #ffc832, #ff9500)', padding: '8px 40px', fontSize: '0.85rem', color: '#000', textAlign: 'center' }}>⭐ Verifizierter Kunde</div>
      )}

      {/* Navigation */}
      <nav style={{ position: 'sticky', top: 0, padding: '15px 40px', background: settings.darkMode ? 'rgba(15,15,15,0.95)' : 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderBottom: `1px solid ${theme.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #ffc832, #ff9500)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🔨</div>
          <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>MAKER SPACE</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} style={{ color: theme.textMuted, textDecoration: 'none', fontSize: '0.85rem', cursor: 'pointer' }}>{t.nav.services}</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} style={{ color: theme.textMuted, textDecoration: 'none', fontSize: '0.85rem', cursor: 'pointer' }}>{t.nav.contact}</a>
          <button onClick={() => setShowSettings(true)} style={{ background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '8px', padding: '6px 12px', color: theme.textMuted, cursor: 'pointer', fontSize: '0.85rem' }}>⚙️</button>
        </div>
      </nav>

      {/* Settings Modal */}
      {showSettings && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={() => setShowSettings(false)}>
          <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderRadius: '16px', padding: '30px', maxWidth: '400px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h3 style={{ margin: 0 }}>⚙️ {t.settings.title}</h3>
              <button onClick={() => setShowSettings(false)} style={{ background: 'transparent', border: 'none', color: theme.textMuted, fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
            </div>

            {/* Sound */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: theme.textMuted }}>🔊 {t.settings.sound}</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => updateSettings({ ...settings, sound: true })} style={{ flex: 1, padding: '10px', background: settings.sound ? '#4ecdc4' : theme.bgAlt, color: settings.sound ? '#000' : theme.textMuted, border: `2px solid ${settings.sound ? '#4ecdc4' : theme.border}`, borderRadius: '8px', cursor: 'pointer' }}>🔔 {t.settings.soundOn}</button>
                <button onClick={() => updateSettings({ ...settings, sound: false })} style={{ flex: 1, padding: '10px', background: !settings.sound ? '#ff6b6b' : theme.bgAlt, color: !settings.sound ? '#fff' : theme.textMuted, border: `2px solid ${!settings.sound ? '#ff6b6b' : theme.border}`, borderRadius: '8px', cursor: 'pointer' }}>🔕 {t.settings.soundOff}</button>
              </div>
            </div>

            {/* Notifications */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: theme.textMuted }}>📬 {t.settings.notifications}</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => toggleNotifications(true)} style={{ flex: 1, padding: '10px', background: settings.notifications ? '#4ecdc4' : theme.bgAlt, color: settings.notifications ? '#000' : theme.textMuted, border: `2px solid ${settings.notifications ? '#4ecdc4' : theme.border}`, borderRadius: '8px', cursor: 'pointer' }}>🔔 {t.settings.notificationsOn}</button>
                <button onClick={() => toggleNotifications(false)} style={{ flex: 1, padding: '10px', background: !settings.notifications ? '#ff6b6b' : theme.bgAlt, color: !settings.notifications ? '#fff' : theme.textMuted, border: `2px solid ${!settings.notifications ? '#ff6b6b' : theme.border}`, borderRadius: '8px', cursor: 'pointer' }}>🔕 {t.settings.notificationsOff}</button>
              </div>
            </div>

            {/* Theme */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: theme.textMuted }}>{t.settings.theme}</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => updateSettings({ ...settings, darkMode: true })} style={{ flex: 1, padding: '10px', background: settings.darkMode ? '#333' : theme.bgAlt, color: settings.darkMode ? '#fff' : theme.textMuted, border: `2px solid ${settings.darkMode ? '#555' : theme.border}`, borderRadius: '8px', cursor: 'pointer' }}>🌙 {t.settings.dark}</button>
                <button onClick={() => updateSettings({ ...settings, darkMode: false })} style={{ flex: 1, padding: '10px', background: !settings.darkMode ? '#ffc832' : theme.bgAlt, color: !settings.darkMode ? '#000' : theme.textMuted, border: `2px solid ${!settings.darkMode ? '#ffc832' : theme.border}`, borderRadius: '8px', cursor: 'pointer' }}>☀️ {t.settings.light}</button>
              </div>
            </div>

            {/* Font Size */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: theme.textMuted }}>{t.settings.fontSize}</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['small', 'normal', 'large'].map(size => (
                  <button key={size} onClick={() => updateSettings({ ...settings, fontSize: size })} style={{ flex: 1, padding: '10px', background: settings.fontSize === size ? '#ffc832' : theme.bgAlt, color: settings.fontSize === size ? '#000' : theme.textMuted, border: `2px solid ${settings.fontSize === size ? '#ffc832' : theme.border}`, borderRadius: '8px', cursor: 'pointer', fontSize: size === 'small' ? '12px' : size === 'large' ? '18px' : '14px' }}>
                    {t.settings[size]}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: theme.textMuted }}>{t.settings.language}</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
                {[{ code: 'de', flag: '🇩🇪', name: 'Deutsch' }, { code: 'en', flag: '🇬🇧', name: 'English' }, { code: 'es', flag: '🇪🇸', name: 'Español' }, { code: 'fr', flag: '🇫🇷', name: 'Français' }].map(lang => (
                  <button key={lang.code} onClick={() => updateSettings({ ...settings, language: lang.code })} style={{ padding: '10px', background: settings.language === lang.code ? '#a855f7' : theme.bgAlt, color: settings.language === lang.code ? '#fff' : theme.textMuted, border: `2px solid ${settings.language === lang.code ? '#a855f7' : theme.border}`, borderRadius: '8px', cursor: 'pointer' }}>
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <header style={{ padding: '80px 40px 60px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,200,50,0.1)', border: '1px solid rgba(255,200,50,0.3)', borderRadius: '30px', marginBottom: '25px', fontSize: '0.85rem', color: '#ffc832' }}>
          <span style={{ width: '8px', height: '8px', background: '#4ecdc4', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          {t.hero.badge}
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-2px', lineHeight: 1.1 }}>
          <span>{t.hero.title1}</span><br />
          <span style={{ background: 'linear-gradient(90deg, #ffc832, #ff6b6b, #4ecdc4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.hero.title2}</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: theme.textMuted, maxWidth: '500px', margin: '0 auto 30px', lineHeight: 1.6 }}>{t.hero.subtitle}</p>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} style={{ display: 'inline-block', padding: '15px 35px', background: 'linear-gradient(135deg, #ffc832, #ff9500)', color: '#000', textDecoration: 'none', fontWeight: 700, borderRadius: '10px', cursor: 'pointer' }}>{t.hero.cta} →</a>
      </header>

      {/* Services */}
      <section id="services" style={{ padding: '60px 40px', background: theme.bg }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '4px', color: '#4ecdc4', marginBottom: '40px', textAlign: 'center' }}>{t.services.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderRadius: '14px', padding: '30px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎨</div>
              <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px' }}>{t.services.product}</h3>
              <p style={{ color: theme.textMuted, margin: '0 0 20px', lineHeight: 1.6 }}>{t.services.productDesc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['3D-Druck', 'LED', 'Geschenke', 'Prototypen'].map((ex, j) => <span key={j} style={{ padding: '5px 12px', background: theme.bgAlt, borderRadius: '20px', fontSize: '0.8rem', color: theme.textMuted }}>{ex}</span>)}
              </div>
            </div>
            <div style={{ background: theme.bgCard, border: `1px solid ${theme.border}`, borderRadius: '14px', padding: '30px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔧</div>
              <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px' }}>{t.services.repair}</h3>
              <p style={{ color: theme.textMuted, margin: '0 0 20px', lineHeight: 1.6 }}>{t.services.repairDesc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Elektronik', 'Spielzeug', 'Geräte', 'Löten'].map((ex, j) => <span key={j} style={{ padding: '5px 12px', background: theme.bgAlt, borderRadius: '20px', fontSize: '0.8rem', color: theme.textMuted }}>{ex}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Section - only visible when needed */}
      {(showAdminSetup || isAdmin) && (
        <section style={{ padding: '40px', background: theme.bgAlt }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            {showAdminSetup && !isAdmin && (
              <div style={{ background: theme.bgCard, border: '2px solid #ffc832', borderRadius: '14px', padding: '30px', textAlign: 'center' }}>
                <h3 style={{ color: '#ffc832', marginBottom: '15px' }}>🔐 Team-Computer einrichten</h3>
                <button onClick={setupAdmin} style={{ padding: '12px 25px', background: '#ffc832', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 700, cursor: 'pointer', marginRight: '10px' }}>✓ Einrichten</button>
                <button onClick={() => setShowAdminSetup(false)} style={{ padding: '12px 20px', background: theme.bgAlt, color: theme.textMuted, border: 'none', borderRadius: '10px', cursor: 'pointer' }}>Abbrechen</button>
              </div>
            )}
            {isAdmin && (
              <div style={{ background: theme.bgCard, border: '1px solid #ffc832', borderRadius: '14px', padding: '25px' }}>
                <h3 style={{ color: '#ffc832', marginBottom: '15px' }}>🎫 Kunden-QR-Code</h3>
                <button onClick={generateCode} style={{ padding: '12px 25px', background: '#ffc832', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>+ Neuer Code</button>
                {newCodeGenerated && (
                  <div style={{ marginTop: '20px', padding: '20px', background: theme.bgAlt, borderRadius: '10px', textAlign: 'center' }}>
                    <img src={getQRUrl(newCodeGenerated)} alt="QR" style={{ width: '150px', height: '150px', background: '#fff', padding: '8px', borderRadius: '8px' }} />
                    <p style={{ color: theme.textMuted, marginTop: '10px', fontSize: '0.85rem' }}>Code: <strong style={{ color: '#ffc832' }}>{newCodeGenerated}</strong></p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" style={{ padding: '60px 40px', background: theme.bgAlt }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '8px' }}>✉️ {t.nav.contact}</h2>
          <p style={{ textAlign: 'center', color: theme.textMuted, marginBottom: '30px' }}>{t.form.sentDesc}</p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '50px 30px', background: theme.bgCard, borderRadius: '14px', border: '2px solid #4ecdc4' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>✅</div>
              <h3 style={{ color: '#4ecdc4' }}>{t.form.sent}</h3>
              <p style={{ color: theme.textMuted }}>{t.form.sentDesc}</p>
            </div>
          ) : (
            <form onSubmit={submitForm} style={{ background: theme.bgCard, padding: '30px', borderRadius: '14px', border: `1px solid ${theme.border}` }}>
              <input type="text" required placeholder={t.form.name} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '14px', background: theme.bgAlt, border: `2px solid ${theme.border}`, borderRadius: '10px', color: theme.text, marginBottom: '15px', boxSizing: 'border-box' }} />
              <input type="email" required placeholder={t.form.email} value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} style={{ width: '100%', padding: '14px', background: theme.bgAlt, border: `2px solid ${theme.border}`, borderRadius: '10px', color: theme.text, marginBottom: '15px', boxSizing: 'border-box' }} />
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                {[{ v: 'produkt', l: `🎨 ${t.form.product}` }, { v: 'reparatur', l: `🔧 ${t.form.repair}` }].map(o => (
                  <button key={o.v} type="button" onClick={() => setFormData({ ...formData, type: o.v })} style={{ flex: 1, padding: '14px', background: formData.type === o.v ? '#ffc832' : theme.bgAlt, color: formData.type === o.v ? '#000' : theme.textMuted, border: `2px solid ${formData.type === o.v ? '#ffc832' : theme.border}`, borderRadius: '10px', fontWeight: 600, cursor: 'pointer' }}>{o.l}</button>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                <input type="text" placeholder={t.form.color} value={formData.color} onChange={e => setFormData({ ...formData, color: e.target.value })} style={{ padding: '12px', background: theme.bgAlt, border: `2px solid ${theme.border}`, borderRadius: '10px', color: theme.text, boxSizing: 'border-box' }} />
                <input type="text" placeholder={t.form.size} value={formData.size} onChange={e => setFormData({ ...formData, size: e.target.value })} style={{ padding: '12px', background: theme.bgAlt, border: `2px solid ${theme.border}`, borderRadius: '10px', color: theme.text, boxSizing: 'border-box' }} />
              </div>
              <input type="text" placeholder={t.form.material} value={formData.material} onChange={e => setFormData({ ...formData, material: e.target.value })} style={{ width: '100%', padding: '12px', background: theme.bgAlt, border: `2px solid ${theme.border}`, borderRadius: '10px', color: theme.text, marginBottom: '15px', boxSizing: 'border-box' }} />
              <textarea required rows={4} placeholder={t.form.description} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} style={{ width: '100%', padding: '14px', background: theme.bgAlt, border: `2px solid ${theme.border}`, borderRadius: '10px', color: theme.text, marginBottom: '15px', resize: 'vertical', boxSizing: 'border-box' }} />
              
              {/* Image Upload */}
              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', background: theme.bgAlt, border: `2px dashed ${theme.border}`, borderRadius: '10px', cursor: 'pointer', color: theme.textMuted }}>
                    <span style={{ fontSize: '1.2rem' }}>📷</span>
                    <span>{t.form.photos}</span>
                    <input type="file" accept="image/*" multiple onChange={handleFormImageUpload} style={{ display: 'none' }} />
                  </label>
                  <span style={{ fontSize: '0.8rem', color: theme.textDark }}>{t.form.maxPhotos}</span>
                </div>
                {formImages.length > 0 && (
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {formImages.map(img => (
                      <div key={img.id} style={{ position: 'relative' }}>
                        <img src={img.data} alt={img.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', border: `2px solid ${theme.border}` }} />
                        <button type="button" onClick={() => removeFormImage(img.id)} style={{ position: 'absolute', top: '-8px', right: '-8px', width: '20px', height: '20px', background: '#ff6b6b', border: 'none', borderRadius: '50%', color: '#fff', cursor: 'pointer', fontSize: '0.7rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #ffc832, #ff9500)', color: '#000', border: 'none', borderRadius: '10px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer' }}>{t.form.send}</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '30px 40px', background: settings.darkMode ? '#0a0a0a' : '#e0e0e0', borderTop: `1px solid ${theme.border}`, textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ fontSize: '1.3rem' }}>🔨</span>
          <span style={{ fontWeight: 700, color: theme.textDark }}>MAKER SPACE</span>
        </div>
        <p style={{ color: '#ffc832', margin: '0 0 10px 0', fontSize: '0.9rem' }}>{t.footer.recommend}</p>
        <p style={{ color: theme.textDark, margin: 0, fontSize: '0.8rem' }}>{t.footer.copyright}</p>
      </footer>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
        ::placeholder { color: ${theme.textDark}; }
        html { scroll-behavior: smooth; }
        nav a:hover { color: #ffc832 !important; }
      `}</style>
    </div>
  );
};

export default MakerSpaceWebsite;
