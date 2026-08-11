// Локализация и валюты
const SUPPORTED_LOCALES = {
  'ru': { lang: 'ru', currency: 'KZT', country: 'Kazakhstan', flag: '🇰🇿' },
  'en-US': { lang: 'en', currency: 'USD', country: 'United States', flag: '🇺🇸' },
  'en-GB': { lang: 'en', currency: 'GBP', country: 'United Kingdom', flag: '🇬🇧' },
  'ar': { lang: 'ar', currency: 'SAR', country: 'Saudi Arabia', flag: '🇸🇦', rtl: true },
  'de': { lang: 'de', currency: 'EUR', country: 'Germany', flag: '🇩🇪' },
  'fr': { lang: 'fr', currency: 'EUR', country: 'France', flag: '🇫🇷' },
  'es': { lang: 'es', currency: 'EUR', country: 'Spain', flag: '🇪🇸' },
  'it': { lang: 'it', currency: 'EUR', country: 'Italy', flag: '🇮🇹' },
  'pt': { lang: 'pt', currency: 'EUR', country: 'Portugal', flag: '🇵🇹' },
  'tr': { lang: 'tr', currency: 'EUR', country: 'Turkey', flag: '🇹🇷' },
  'ko': { lang: 'ko', currency: 'KRW', country: 'South Korea', flag: '🇰🇷' },
  'ja': { lang: 'ja', currency: 'JPY', country: 'Japan', flag: '🇯🇵' },
  'zh': { lang: 'zh', currency: 'CNY', country: 'China', flag: '🇨🇳' }
};

const EXCHANGE_RATES = {
  'KZT': 1,
  'USD': 0.0022,
  'GBP': 0.0017,
  'SAR': 0.0083,
  'EUR': 0.002,
  'RUB': 0.2,
  'KRW': 3,
  'JPY': 0.33,
  'CNY': 0.016
};

const TRANSLATIONS = {
  'ru': {
    // Навигация
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.contacts': 'Контакты',
    'nav.delivery': 'Доставка',
    'nav.language': 'Язык',
    'nav.currency': 'Валюта',
    
    // Главная страница
    'hero.eyebrow': 'НОВАЯ КОЛЛЕКЦИЯ · 2026',
    'hero.title': 'Поднимите свою рутину на новый уровень с премиальной косметикой.',
    'hero.subtitle': 'Откройте для себя уход, макияж и парфюмерию, созданные для сияния с утра до вечера.',
    'hero.cta': 'Купить коллекцию',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'довольных клиентов',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'оценка покупателей',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'поддержка',
    'hero.bestseller': 'Лидер продаж',
    'hero.product': 'Сияющая сыворотка',
    'hero.product.desc': 'Осветляющее увлажнение с ниацинамидом',
    
    // Каталог
    'catalog.eyebrow': 'Каталог',
    'catalog.title': 'Подобранные бестселлеры для каждого сияния.',
    'catalog.desc': '12 премиальных товаров с доставкой по всему миру.',
    'product.left': 'осталось',
    'product.not_available': 'Нет в наличии',
    'product.add_to_cart': 'В корзину',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' осталось'; },
    
    // Корзина
    'cart.eyebrow': 'Checkout',
    'cart.title': 'Fast cart and secure payment.',
    'cart.desc': 'Choose Kaspi Pay for a seamless digital checkout.',
    'cart.header': 'Ваша корзина',
    'cart.empty': 'Корзина пуста. Добавьте несколько любимых товаров, чтобы продолжить.',
    'cart.remove': 'Удалить',
    'cart.total': 'Итого',
    'cart.checkout': 'Оформить заказ',
    'cart.checkout_title': 'Данные доставки',
    
    // Форма
    'form.name': 'Полное имя',
    'form.email': 'Email',
    'form.phone': 'Телефон',
    'form.address': 'Адрес',
    'form.payment_info': 'Оплата картой KZ40722C000029379088. Карта будет списана после подтверждения заказа.',
    'form.card': 'Карта KZ40722C000029379088',
    'form.submit': 'Оформить заказ',
    'form.payment_method': 'Способ оплаты',
    'form.payment_secure': '✓ Платеж защищен и обработан безопасно через глобальные платежные системы.',
    
    // Тосты
    'toast.empty_cart': 'Корзина пуста.',
    'toast.item_added': function(name) { return name + ' добавлен в корзину.'; },
    'toast.not_available': 'Этот товар сейчас отсутствует.',
    'toast.order_success': function(method) { return 'Заказ успешно оформлен.'; },
    'toast.product_added': 'Товар добавлен успешно.',
    'toast.product_updated': 'Товар обновлён.',
    'toast.product_deleted': 'Товар удалён.',
    'toast.order_status_updated': 'Статус заказа обновлён.',
    'toast.access_granted': 'Доступ к панели владельца открыт.',
    'toast.wrong_password': 'Неверный пароль.',
    
    // Владелец
    'owner.title': 'Управление товарами и заказами',
    'owner.eyebrow': 'Owner panel',
    'owner.add_product': 'Добавить товар',
    'owner.orders': 'Заказы клиентов',
    'owner.access': 'Доступ только для владельца',
    'owner.password_prompt': 'Введите пароль, чтобы открыть панель управления.',
    'owner.password': 'Пароль',
    'owner.login': 'Войти',
    'owner.product_name': 'Название',
    'owner.category': 'Категория',
    'owner.price': 'Цена',
    'owner.stock': 'Остаток',
    'owner.image_url': 'URL изображения',
    'owner.description': 'Описание',
    'owner.add': 'Добавить товар',
    'owner.save': 'Сохранить',
    'owner.delete': 'Удалить',
    'owner.no_orders': 'Пока нет заказов. Новые заказы клиентов появятся здесь.',
    'order.status.pending': 'Ожидает',
    'order.status.packed': 'Собран',
    'order.status.shipped': 'Отправлен',
    'order.status.delivered': 'Доставлен',
    
    // Страницы
    'about.eyebrow': 'О нас',
    'about.title': 'Мы создаём премиальную косметику для ежедневного сияния.',
    'about.text1': 'Velora Beauty — это современный бренд, который сочетает заботу о коже, высокую эффективность и красивый дизайн. Мы выбираем активные ингредиенты, продуманные формулы и делаем доставку удобной и быстрой.',
    'about.text2': 'Наша миссия — помогать женщинам и мужчинам чувствовать себя уверенно каждый день, выбирая продукты, которые дарят комфорт, уход и ощущение роскоши.',
    
    'contacts.eyebrow': 'Контакты',
    'contacts.title': 'Свяжитесь с нами удобным способом.',
    'contacts.email': 'Email',
    'contacts.phone': 'Телефон',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Адрес',
    'contacts.hours': 'Часы работы',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Алматы, Казахстан',
    'contacts.hours_val': 'Пн–Вс, 09:00–21:00',
    
    'delivery.eyebrow': 'Доставка',
    'delivery.title': 'Быстрая и удобная доставка по всему миру.',
    'delivery.text': 'Мы доставляем заказы в течение 1–3 рабочих дней по Казахстану и в течение 5–10 дней по международным направлениям. После подтверждения заказа вы получите трек-номер для отслеживания.',
    
    'footer': 'Velora Beauty © 2026 · Премиальная косметика для современных ритуалов.',
    'footer.links': 'О нас · Контакты · Доставка',
    'ask_question': 'Задать вопрос',
  },
  'en': {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contacts': 'Contacts',
    'nav.delivery': 'Delivery',
    'nav.language': 'Language',
    'nav.currency': 'Currency',
    
    'hero.eyebrow': 'NEW COLLECTION · 2026',
    'hero.title': 'Elevate your routine with premium beauty essentials.',
    'hero.subtitle': 'Discover skincare, makeup and fragrances crafted for radiance from morning to night.',
    'hero.cta': 'Shop Collection',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'satisfied customers',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'customer rating',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'support',
    'hero.bestseller': 'Best Seller',
    'hero.product': 'Radiant Serum',
    'hero.product.desc': 'Brightening hydration with niacinamide',
    
    'catalog.eyebrow': 'Catalog',
    'catalog.title': 'Curated bestsellers for every glow.',
    'catalog.desc': '12 premium products with worldwide delivery.',
    'product.left': 'left',
    'product.not_available': 'Out of Stock',
    'product.add_to_cart': 'Add to Cart',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' left'; },
    
    'cart.eyebrow': 'Checkout',
    'cart.title': 'Fast cart and secure payment.',
    'cart.desc': 'Choose our payment option for a seamless checkout.',
    'cart.header': 'Your Cart',
    'cart.empty': 'Your cart is empty. Add some favorites to continue.',
    'cart.remove': 'Remove',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'cart.checkout_title': 'Shipping Details',
    
    'form.name': 'Full Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.address': 'Address',
    'form.payment_info': 'Pay by card KZ40722C000029379088. Your card will be charged after order confirmation.',
    'form.card': 'Card KZ40722C000029379088',
    'form.submit': 'Place Order',
    'form.payment_method': 'Payment Method',
    'form.payment_secure': '✓ Payment is secure and processed safely through global payment systems.',
    
    'toast.empty_cart': 'Your cart is empty.',
    'toast.item_added': function(name) { return name + ' added to cart.'; },
    'toast.not_available': 'This item is currently unavailable.',
    'toast.order_success': function(method) { return 'Order placed successfully.'; },
    'toast.product_added': 'Product added successfully.',
    'toast.product_updated': 'Product updated.',
    'toast.product_deleted': 'Product deleted.',
    'toast.order_status_updated': 'Order status updated.',
    'toast.access_granted': 'Owner panel access granted.',
    'toast.wrong_password': 'Wrong password.',
    
    'owner.title': 'Manage Products & Orders',
    'owner.eyebrow': 'Owner Panel',
    'owner.add_product': 'Add Product',
    'owner.orders': 'Customer Orders',
    'owner.access': 'Owner Access Only',
    'owner.password_prompt': 'Enter your password to access the admin panel.',
    'owner.password': 'Password',
    'owner.login': 'Login',
    'owner.product_name': 'Name',
    'owner.category': 'Category',
    'owner.price': 'Price',
    'owner.stock': 'Stock',
    'owner.image_url': 'Image URL',
    'owner.description': 'Description',
    'owner.add': 'Add Product',
    'owner.save': 'Save',
    'owner.delete': 'Delete',
    'owner.no_orders': 'No orders yet. Customer orders will appear here.',
    'order.status.pending': 'Pending',
    'order.status.packed': 'Packed',
    'order.status.shipped': 'Shipped',
    'order.status.delivered': 'Delivered',
    
    'about.eyebrow': 'About',
    'about.title': 'We create premium beauty for everyday radiance.',
    'about.text1': 'Velora Beauty is a modern brand that combines skincare, high performance and beautiful design. We choose active ingredients, thoughtful formulas and make delivery convenient and fast.',
    'about.text2': 'Our mission is to help women and men feel confident every day by choosing products that deliver comfort, care and a sense of luxury.',
    
    'contacts.eyebrow': 'Contacts',
    'contacts.title': 'Get in touch with us.',
    'contacts.email': 'Email',
    'contacts.phone': 'Phone',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Address',
    'contacts.hours': 'Hours',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Almaty, Kazakhstan',
    'contacts.hours_val': 'Mon–Sun, 09:00–21:00',
    
    'delivery.eyebrow': 'Delivery',
    'delivery.title': 'Fast and convenient worldwide delivery.',
    'delivery.text': 'We deliver orders within 1–3 business days in Kazakhstan and 5–10 days internationally. After order confirmation, you will receive a tracking number.',
    
    'footer': 'Velora Beauty © 2026 · Premium beauty for modern rituals.',
    'footer.links': 'About · Contacts · Delivery',
    'ask_question': 'Ask a Question',
  },
  'ar': {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.contacts': 'جهات الاتصال',
    'nav.delivery': 'التسليم',
    'nav.language': 'اللغة',
    'nav.currency': 'العملة',
    
    'hero.eyebrow': 'المجموعة الجديدة · 2026',
    'hero.title': 'ارفع روتينك باستخدام منتجات التجميل الفاخرة.',
    'hero.subtitle': 'اكتشفي العناية بالبشرة والمكياج والعطور المصنوعة للتألق من الصباح إلى المساء.',
    'hero.cta': 'تسوق المجموعة',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'عملاء راضون',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'تقييم العملاء',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'الدعم',
    'hero.bestseller': 'الأكثر مبيعاً',
    'hero.product': 'سيروم التألق',
    'hero.product.desc': 'ترطيب فاتح مع النياسيناميد',
    
    'catalog.eyebrow': 'الكتالوج',
    'catalog.title': 'أفضل المبيعات لكل توهج.',
    'catalog.desc': '12 منتج فاخر مع توصيل عالمي.',
    'product.left': 'المتبقي',
    'product.not_available': 'غير متاح',
    'product.add_to_cart': 'أضف إلى السلة',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' متبقي'; },
    
    'cart.eyebrow': 'الدفع',
    'cart.title': 'دفع سريع وآمن.',
    'cart.desc': 'اختر خيار الدفع لدينا للحصول على عملية شراء سلسة.',
    'cart.header': 'سلتك',
    'cart.empty': 'سلتك فارغة. أضف بعض المفضلات للمتابعة.',
    'cart.remove': 'إزالة',
    'cart.total': 'المجموع',
    'cart.checkout': 'إتمام الشراء',
    'cart.checkout_title': 'تفاصيل الشحن',
    
    'form.name': 'الاسم الكامل',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'الهاتف',
    'form.address': 'العنوان',
    'form.payment_info': 'ادفع بالبطاقة KZ40722C000029379088. سيتم خصم بطاقتك بعد تأكيد الطلب.',
    'form.card': 'البطاقة KZ40722C000029379088',
    'form.submit': 'تقديم الطلب',
    'form.payment_method': 'طريقة الدفع',
    'form.payment_secure': '✓ الدفع آمن ومعالج بأمان من خلال أنظمة الدفع العالمية.',
    
    'toast.empty_cart': 'سلتك فارغة.',
    'toast.item_added': function(name) { return name + ' أضيف إلى السلة.'; },
    'toast.not_available': 'هذا المنتج غير متاح حالياً.',
    'toast.order_success': function(method) { return 'تم تقديم الطلب بنجاح.'; },
    'toast.product_added': 'تمت إضافة المنتج بنجاح.',
    'toast.product_updated': 'تم تحديث المنتج.',
    'toast.product_deleted': 'تم حذف المنتج.',
    'toast.order_status_updated': 'تم تحديث حالة الطلب.',
    'toast.access_granted': 'تم منح الوصول إلى لوحة المالك.',
    'toast.wrong_password': 'كلمة مرور خاطئة.',
    
    'owner.title': 'إدارة المنتجات والطلبات',
    'owner.eyebrow': 'لوحة المالك',
    'owner.add_product': 'إضافة منتج',
    'owner.orders': 'طلبات العملاء',
    'owner.access': 'الوصول للمالك فقط',
    'owner.password_prompt': 'أدخل كلمة المرور للوصول إلى لوحة التحكم.',
    'owner.password': 'كلمة المرور',
    'owner.login': 'تسجيل الدخول',
    'owner.product_name': 'الاسم',
    'owner.category': 'الفئة',
    'owner.price': 'السعر',
    'owner.stock': 'المخزون',
    'owner.image_url': 'رابط الصورة',
    'owner.description': 'الوصف',
    'owner.add': 'إضافة منتج',
    'owner.save': 'حفظ',
    'owner.delete': 'حذف',
    'owner.no_orders': 'لا توجد طلبات حتى الآن.',
    'order.status.pending': 'قيد الانتظار',
    'order.status.packed': 'معبأ',
    'order.status.shipped': 'تم الشحن',
    'order.status.delivered': 'تم التسليم',
    
    'about.eyebrow': 'من نحن',
    'about.title': 'نحن نصنع منتجات تجميل فاخرة للتألق اليومي.',
    'about.text1': 'Velora Beauty هي علامة تجارية حديثة تجمع بين العناية بالبشرة والأداء العالي والتصميم الجميل. نختار المكونات النشطة والصيغ المدروسة والتسليم السريع والمريح.',
    'about.text2': 'مهمتنا هي مساعدة النساء والرجال على الشعور بالثقة كل يوم باختيار المنتجات التي توفر الراحة والعناية والفخامة.',
    
    'contacts.eyebrow': 'جهات الاتصال',
    'contacts.title': 'تواصل معنا بالطريقة التي تناسبك.',
    'contacts.email': 'البريد الإلكتروني',
    'contacts.phone': 'الهاتف',
    'contacts.whatsapp': 'واتس آب',
    'contacts.address': 'العنوان',
    'contacts.hours': 'ساعات العمل',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'ألماتي، كازاخستان',
    'contacts.hours_val': 'الاثنين–الأحد، 09:00–21:00',
    
    'delivery.eyebrow': 'التسليم',
    'delivery.title': 'توصيل سريع وسهل في جميع أنحاء العالم.',
    'delivery.text': 'نسلم الطلبات خلال 1-3 أيام عمل في كازاخستان و 5-10 أيام دولياً. بعد تأكيد الطلب، ستتلقى رقم تتبع.',
    
    'footer': 'Velora Beauty © 2026 · منتجات تجميل فاخرة للطقوس الحديثة.',
    'footer.links': 'من نحن · جهات الاتصال · التسليم',
    'ask_question': 'اسأل سؤال',
  },
  'de': {
    'nav.home': 'Startseite',
    'nav.about': 'Über Uns',
    'nav.contacts': 'Kontakt',
    'nav.delivery': 'Versand',
    'nav.language': 'Sprache',
    'nav.currency': 'Währung',
    
    'hero.eyebrow': 'NEUE KOLLEKTION · 2026',
    'hero.title': 'Heben Sie Ihre Routine mit Premium-Schönheit.',
    'hero.subtitle': 'Entdecken Sie Hautpflege, Make-up und Parfüm für den ganztägigen Glanz.',
    'hero.cta': 'Kollektion kaufen',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'zufriedene Kunden',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'Kundenbewertung',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'Unterstützung',
    'hero.bestseller': 'Bestseller',
    'hero.product': 'Strahlenserum',
    'hero.product.desc': 'Aufhellende Hydratation mit Niacinamid',
    
    'catalog.eyebrow': 'Katalog',
    'catalog.title': 'Kuratierte Bestseller für jeden Glanz.',
    'catalog.desc': '12 Premium-Produkte mit weltweitem Versand.',
    'product.left': 'verfügbar',
    'product.not_available': 'Nicht verfügbar',
    'product.add_to_cart': 'In den Warenkorb',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' verfügbar'; },
    
    'cart.eyebrow': 'Kasse',
    'cart.title': 'Schnelle und sichere Zahlung.',
    'cart.desc': 'Wählen Sie unsere Zahlungsoption für einen nahtlosen Einkauf.',
    'cart.header': 'Ihr Warenkorb',
    'cart.empty': 'Ihr Warenkorb ist leer. Fügen Sie Ihre Favoriten hinzu.',
    'cart.remove': 'Entfernen',
    'cart.total': 'Gesamt',
    'cart.checkout': 'Kasse',
    'cart.checkout_title': 'Versanddetails',
    
    'form.name': 'Vollständiger Name',
    'form.email': 'E-Mail',
    'form.phone': 'Telefon',
    'form.address': 'Adresse',
    'form.payment_info': 'Zahlung mit Karte KZ40722C000029379088. Ihre Karte wird nach Bestellbestätigung belastet.',
    'form.card': 'Karte KZ40722C000029379088',
    'form.submit': 'Bestellung aufgeben',
    'form.payment_method': 'Zahlungsmethode',
    'form.payment_secure': '✓ Die Zahlung ist sicher und wird über globale Zahlungssysteme verarbeitet.',
    
    'toast.empty_cart': 'Ihr Warenkorb ist leer.',
    'toast.item_added': function(name) { return name + ' wurde hinzugefügt.'; },
    'toast.not_available': 'Dieses Produkt ist derzeit nicht verfügbar.',
    'toast.order_success': function(method) { return 'Bestellung erfolgreich aufgegeben.'; },
    'toast.product_added': 'Produkt erfolgreich hinzugefügt.',
    'toast.product_updated': 'Produkt aktualisiert.',
    'toast.product_deleted': 'Produkt gelöscht.',
    'toast.order_status_updated': 'Bestellstatus aktualisiert.',
    'toast.access_granted': 'Zugriff auf Eigentümerpanel erteilt.',
    'toast.wrong_password': 'Falsches Passwort.',
    
    'owner.title': 'Produkte & Bestellungen verwalten',
    'owner.eyebrow': 'Eigentümerpanel',
    'owner.add_product': 'Produkt hinzufügen',
    'owner.orders': 'Kundenbestellungen',
    'owner.access': 'Nur für Eigentümer',
    'owner.password_prompt': 'Geben Sie Ihr Passwort ein.',
    'owner.password': 'Passwort',
    'owner.login': 'Anmelden',
    'owner.product_name': 'Name',
    'owner.category': 'Kategorie',
    'owner.price': 'Preis',
    'owner.stock': 'Bestand',
    'owner.image_url': 'Bild-URL',
    'owner.description': 'Beschreibung',
    'owner.add': 'Hinzufügen',
    'owner.save': 'Speichern',
    'owner.delete': 'Löschen',
    'owner.no_orders': 'Noch keine Bestellungen.',
    'order.status.pending': 'Ausstehend',
    'order.status.packed': 'Verpackt',
    'order.status.shipped': 'Versandt',
    'order.status.delivered': 'Zugestellt',
    
    'about.eyebrow': 'Über Uns',
    'about.title': 'Wir schaffen Premium-Schönheit für täglichen Glanz.',
    'about.text1': 'Velora Beauty ist eine moderne Marke, die Hautpflege, hohe Leistung und schönes Design verbindet. Wir wählen aktive Inhaltsstoffe und schnellen Versand.',
    'about.text2': 'Unsere Mission ist es, Frauen und Männern täglich Vertrauen zu geben.',
    
    'contacts.eyebrow': 'Kontakt',
    'contacts.title': 'Kontaktieren Sie uns.',
    'contacts.email': 'E-Mail',
    'contacts.phone': 'Telefon',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Adresse',
    'contacts.hours': 'Öffnungszeiten',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Almaty, Kasachstan',
    'contacts.hours_val': 'Mo–So, 09:00–21:00',
    
    'delivery.eyebrow': 'Versand',
    'delivery.title': 'Schneller weltweiter Versand.',
    'delivery.text': 'Wir versenden innerhalb von 1-3 Werktagen in Kasachstan und 5-10 Tagen international.',
    
    'footer': 'Velora Beauty © 2026 · Premium-Schönheit für moderne Rituale.',
    'footer.links': 'Über · Kontakt · Versand',
    'ask_question': 'Frage stellen',
  },
  'fr': {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.contacts': 'Contacts',
    'nav.delivery': 'Livraison',
    'nav.language': 'Langue',
    'nav.currency': 'Devises',
    
    'hero.eyebrow': 'NOUVELLE COLLECTION · 2026',
    'hero.title': 'Sublimez votre routine avec la beauté premium.',
    'hero.subtitle': 'Découvrez les soins, le maquillage et les parfums pour l\'éclat de jour et de nuit.',
    'hero.cta': 'Acheter la collection',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'clients satisfaits',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'avis clients',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'assistance',
    'hero.bestseller': 'Meilleure Vente',
    'hero.product': 'Sérum Éclat',
    'hero.product.desc': 'Hydratation éclaircissante avec niacinamide',
    
    'catalog.eyebrow': 'Catalogue',
    'catalog.title': 'Les meilleures ventes pour chaque éclat.',
    'catalog.desc': '12 produits premium avec livraison mondiale.',
    'product.left': 'restant',
    'product.not_available': 'Rupture de stock',
    'product.add_to_cart': 'Ajouter au panier',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' restant'; },
    
    'cart.eyebrow': 'Paiement',
    'cart.title': 'Paiement rapide et sécurisé.',
    'cart.desc': 'Choisissez notre option de paiement.',
    'cart.header': 'Votre panier',
    'cart.empty': 'Votre panier est vide. Ajoutez vos favoris.',
    'cart.remove': 'Supprimer',
    'cart.total': 'Total',
    'cart.checkout': 'Passer la commande',
    'cart.checkout_title': 'Détails de la livraison',
    
    'form.name': 'Nom complet',
    'form.email': 'E-mail',
    'form.phone': 'Téléphone',
    'form.address': 'Adresse',
    'form.payment_info': 'Payez par carte KZ40722C000029379088. Votre carte sera débité après confirmation.',
    'form.card': 'Carte KZ40722C000029379088',
    'form.submit': 'Passer la commande',
    'form.payment_method': 'Méthode de paiement',
    'form.payment_secure': '✓ Le paiement est sécurisé et traité en toute sécurité par les systèmes de paiement mondiaux.',
    
    'toast.empty_cart': 'Votre panier est vide.',
    'toast.item_added': function(name) { return name + ' ajouté au panier.'; },
    'toast.not_available': 'Ce produit n\'est actuellement pas disponible.',
    'toast.order_success': function(method) { return 'Commande passée avec succès.'; },
    'toast.product_added': 'Produit ajouté avec succès.',
    'toast.product_updated': 'Produit mis à jour.',
    'toast.product_deleted': 'Produit supprimé.',
    'toast.order_status_updated': 'État de la commande mis à jour.',
    'toast.access_granted': 'Accès au panneau du propriétaire accordé.',
    'toast.wrong_password': 'Mot de passe incorrect.',
    
    'owner.title': 'Gérer les produits et commandes',
    'owner.eyebrow': 'Panneau du propriétaire',
    'owner.add_product': 'Ajouter un produit',
    'owner.orders': 'Commandes client',
    'owner.access': 'Accès propriétaire uniquement',
    'owner.password_prompt': 'Entrez votre mot de passe.',
    'owner.password': 'Mot de passe',
    'owner.login': 'Connexion',
    'owner.product_name': 'Nom',
    'owner.category': 'Catégorie',
    'owner.price': 'Prix',
    'owner.stock': 'Stock',
    'owner.image_url': 'URL de l\'image',
    'owner.description': 'Description',
    'owner.add': 'Ajouter',
    'owner.save': 'Enregistrer',
    'owner.delete': 'Supprimer',
    'owner.no_orders': 'Pas encore de commandes.',
    'order.status.pending': 'En attente',
    'order.status.packed': 'Emballé',
    'order.status.shipped': 'Expédié',
    'order.status.delivered': 'Livré',
    
    'about.eyebrow': 'À Propos',
    'about.title': 'Nous créons la beauté premium pour l\'éclat quotidien.',
    'about.text1': 'Velora Beauty est une marque moderne qui allie soin de la peau, haute performance et beau design. Nous choisissons des ingrédients actifs et une livraison rapide.',
    'about.text2': 'Notre mission est d\'aider chaque femme et homme à se sentir confiant.',
    
    'contacts.eyebrow': 'Contacts',
    'contacts.title': 'Contactez-nous.',
    'contacts.email': 'E-mail',
    'contacts.phone': 'Téléphone',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Adresse',
    'contacts.hours': 'Horaires',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Almaty, Kazakhstan',
    'contacts.hours_val': 'Lun–Dim, 09:00–21:00',
    
    'delivery.eyebrow': 'Livraison',
    'delivery.title': 'Livraison rapide dans le monde entier.',
    'delivery.text': 'Nous livrons en 1-3 jours au Kazakhstan et 5-10 jours à l\'international.',
    
    'footer': 'Velora Beauty © 2026 · Beauté premium pour les rituels modernes.',
    'footer.links': 'À propos · Contacts · Livraison',
    'ask_question': 'Poser une question',
  },
  'es': {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.contacts': 'Contactos',
    'nav.delivery': 'Envío',
    'nav.language': 'Idioma',
    'nav.currency': 'Moneda',
    
    'hero.eyebrow': 'NUEVA COLECCIÓN · 2026',
    'hero.title': 'Eleva tu rutina con belleza premium.',
    'hero.subtitle': 'Descubre cuidado, maquillaje y perfumes para el brillo diario.',
    'hero.cta': 'Comprar colección',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'clientes satisfechos',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'calificación',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'soporte',
    'hero.bestseller': 'Más vendido',
    'hero.product': 'Sérum Radiante',
    'hero.product.desc': 'Hidratación iluminadora con niacinamida',
    
    'catalog.eyebrow': 'Catálogo',
    'catalog.title': 'Bestsellers para cada brillo.',
    'catalog.desc': '12 productos premium con envío mundial.',
    'product.left': 'disponibles',
    'product.not_available': 'Agotado',
    'product.add_to_cart': 'Añadir al carrito',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' disponibles'; },
    
    'cart.eyebrow': 'Pago',
    'cart.title': 'Pago rápido y seguro.',
    'cart.desc': 'Elige nuestra opción de pago.',
    'cart.header': 'Tu carrito',
    'cart.empty': 'Tu carrito está vacío. Añade tus favoritos.',
    'cart.remove': 'Eliminar',
    'cart.total': 'Total',
    'cart.checkout': 'Realizar pedido',
    'cart.checkout_title': 'Detalles de envío',
    
    'form.name': 'Nombre completo',
    'form.email': 'Correo electrónico',
    'form.phone': 'Teléfono',
    'form.address': 'Dirección',
    'form.payment_info': 'Paga con tarjeta KZ40722C000029379088. Tu tarjeta se cargará tras la confirmación.',
    'form.card': 'Tarjeta KZ40722C000029379088',
    'form.submit': 'Realizar pedido',
    'form.payment_method': 'Método de pago',
    'form.payment_secure': '✓ El pago es seguro y se procesa de forma segura a través de sistemas de pago globales.',
    
    'toast.empty_cart': 'Tu carrito está vacío.',
    'toast.item_added': function(name) { return name + ' añadido al carrito.'; },
    'toast.not_available': 'Este producto no está disponible.',
    'toast.order_success': function(method) { return 'Pedido realizado con éxito.'; },
    'toast.product_added': 'Producto añadido con éxito.',
    'toast.product_updated': 'Producto actualizado.',
    'toast.product_deleted': 'Producto eliminado.',
    'toast.order_status_updated': 'Estado actualizado.',
    'toast.access_granted': 'Acceso concedido.',
    'toast.wrong_password': 'Contraseña incorrecta.',
    
    'owner.title': 'Gestionar productos y pedidos',
    'owner.eyebrow': 'Panel del propietario',
    'owner.add_product': 'Añadir producto',
    'owner.orders': 'Pedidos',
    'owner.access': 'Solo propietario',
    'owner.password_prompt': 'Ingresa tu contraseña.',
    'owner.password': 'Contraseña',
    'owner.login': 'Iniciar sesión',
    'owner.product_name': 'Nombre',
    'owner.category': 'Categoría',
    'owner.price': 'Precio',
    'owner.stock': 'Stock',
    'owner.image_url': 'URL de imagen',
    'owner.description': 'Descripción',
    'owner.add': 'Añadir',
    'owner.save': 'Guardar',
    'owner.delete': 'Eliminar',
    'owner.no_orders': 'Sin pedidos aún.',
    'order.status.pending': 'Pendiente',
    'order.status.packed': 'Empaquetado',
    'order.status.shipped': 'Enviado',
    'order.status.delivered': 'Entregado',
    
    'about.eyebrow': 'Acerca de',
    'about.title': 'Creamos belleza premium para el brillo diario.',
    'about.text1': 'Velora Beauty es una marca moderna que combina cuidado, rendimiento y diseño. Elegimos ingredientes activos y envío rápido.',
    'about.text2': 'Nuestra misión es ayudarte a sentirte confiado cada día.',
    
    'contacts.eyebrow': 'Contactos',
    'contacts.title': 'Ponte en contacto con nosotros.',
    'contacts.email': 'Correo',
    'contacts.phone': 'Teléfono',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Dirección',
    'contacts.hours': 'Horario',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Almaty, Kazajistán',
    'contacts.hours_val': 'Lun–Dom, 09:00–21:00',
    
    'delivery.eyebrow': 'Envío',
    'delivery.title': 'Envío rápido a todo el mundo.',
    'delivery.text': 'Entregamos en 1-3 días en Kazajistán y 5-10 días internacionalmente.',
    
    'footer': 'Velora Beauty © 2026 · Belleza premium para rituales modernos.',
    'footer.links': 'Acerca · Contactos · Envío',
    'ask_question': 'Hacer pregunta',
  },
  'it': {
    'nav.home': 'Home',
    'nav.about': 'Chi Siamo',
    'nav.contacts': 'Contatti',
    'nav.delivery': 'Spedizione',
    'nav.language': 'Lingua',
    'nav.currency': 'Valuta',
    
    'hero.eyebrow': 'NUOVA COLLEZIONE · 2026',
    'hero.title': 'Eleva la tua routine con bellezza premium.',
    'hero.subtitle': 'Scopri cura, trucco e profumi per il tuo splendore quotidiano.',
    'hero.cta': 'Acquista collezione',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'clienti soddisfatti',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'valutazione',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'supporto',
    'hero.bestseller': 'Bestseller',
    'hero.product': 'Siero Radioso',
    'hero.product.desc': 'Idratazione illuminante con niacinamide',
    
    'catalog.eyebrow': 'Catalogo',
    'catalog.title': 'Bestseller per ogni splendore.',
    'catalog.desc': '12 prodotti premium con spedizione mondiale.',
    'product.left': 'disponibili',
    'product.not_available': 'Esaurito',
    'product.add_to_cart': 'Aggiungi al carrello',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' disponibili'; },
    
    'cart.eyebrow': 'Checkout',
    'cart.title': 'Pagamento rapido e sicuro.',
    'cart.desc': 'Scegli il nostro metodo di pagamento.',
    'cart.header': 'Il tuo carrello',
    'cart.empty': 'Il tuo carrello è vuoto. Aggiungi i tuoi preferiti.',
    'cart.remove': 'Rimuovi',
    'cart.total': 'Totale',
    'cart.checkout': 'Effettua l\'ordine',
    'cart.checkout_title': 'Dettagli spedizione',
    
    'form.name': 'Nome completo',
    'form.email': 'Email',
    'form.phone': 'Telefono',
    'form.address': 'Indirizzo',
    'form.payment_info': 'Paga con carta KZ40722C000029379088. La tua carta verrà addebitata dopo la conferma.',
    'form.card': 'Carta KZ40722C000029379088',
    'form.submit': 'Effettua l\'ordine',
    'form.payment_method': 'Metodo di pagamento',
    'form.payment_secure': '✓ Il pagamento è sicuro ed elaborato in modo sicuro attraverso sistemi di pagamento globali.',
    
    'toast.empty_cart': 'Il tuo carrello è vuoto.',
    'toast.item_added': function(name) { return name + ' aggiunto al carrello.'; },
    'toast.not_available': 'Questo prodotto non è disponibile.',
    'toast.order_success': function(method) { return 'Ordine effettuato con successo.'; },
    'toast.product_added': 'Prodotto aggiunto con successo.',
    'toast.product_updated': 'Prodotto aggiornato.',
    'toast.product_deleted': 'Prodotto eliminato.',
    'toast.order_status_updated': 'Stato ordine aggiornato.',
    'toast.access_granted': 'Accesso concesso.',
    'toast.wrong_password': 'Password errata.',
    
    'owner.title': 'Gestisci prodotti e ordini',
    'owner.eyebrow': 'Pannello proprietario',
    'owner.add_product': 'Aggiungi prodotto',
    'owner.orders': 'Ordini',
    'owner.access': 'Solo proprietario',
    'owner.password_prompt': 'Inserisci la tua password.',
    'owner.password': 'Password',
    'owner.login': 'Accedi',
    'owner.product_name': 'Nome',
    'owner.category': 'Categoria',
    'owner.price': 'Prezzo',
    'owner.stock': 'Magazzino',
    'owner.image_url': 'URL immagine',
    'owner.description': 'Descrizione',
    'owner.add': 'Aggiungi',
    'owner.save': 'Salva',
    'owner.delete': 'Elimina',
    'owner.no_orders': 'Nessun ordine ancora.',
    'order.status.pending': 'In sospeso',
    'order.status.packed': 'Imballato',
    'order.status.shipped': 'Spedito',
    'order.status.delivered': 'Consegnato',
    
    'about.eyebrow': 'Chi Siamo',
    'about.title': 'Creiamo bellezza premium per il tuo splendore quotidiano.',
    'about.text1': 'Velora Beauty è un marchio moderno che combina cura, prestazioni e design. Scegliamo ingredienti attivi e spedizione veloce.',
    'about.text2': 'La nostra missione è aiutarti a sentirti fiducioso ogni giorno.',
    
    'contacts.eyebrow': 'Contatti',
    'contacts.title': 'Contattaci.',
    'contacts.email': 'Email',
    'contacts.phone': 'Telefono',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Indirizzo',
    'contacts.hours': 'Orari',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Almaty, Kazakistan',
    'contacts.hours_val': 'Lun–Dom, 09:00–21:00',
    
    'delivery.eyebrow': 'Spedizione',
    'delivery.title': 'Spedizione veloce in tutto il mondo.',
    'delivery.text': 'Consegniamo in 1-3 giorni in Kazakistan e 5-10 giorni a livello internazionale.',
    
    'footer': 'Velora Beauty © 2026 · Bellezza premium per rituali moderni.',
    'footer.links': 'Chi siamo · Contatti · Spedizione',
    'ask_question': 'Fai una domanda',
  },
  'pt': {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.contacts': 'Contatos',
    'nav.delivery': 'Entrega',
    'nav.language': 'Idioma',
    'nav.currency': 'Moeda',
    
    'hero.eyebrow': 'NOVA COLEÇÃO · 2026',
    'hero.title': 'Eleve sua rotina com beleza premium.',
    'hero.subtitle': 'Descubra cuidados, maquiagem e perfumes para seu brilho diário.',
    'hero.cta': 'Compre a coleção',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'clientes satisfeitos',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'avaliação',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'suporte',
    'hero.bestseller': 'Mais Vendido',
    'hero.product': 'Sérum Radiante',
    'hero.product.desc': 'Hidratação iluminadora com niacinamida',
    
    'catalog.eyebrow': 'Catálogo',
    'catalog.title': 'Bestsellers para cada brilho.',
    'catalog.desc': '12 produtos premium com entrega mundial.',
    'product.left': 'disponíveis',
    'product.not_available': 'Fora de estoque',
    'product.add_to_cart': 'Adicione ao carrinho',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' disponíveis'; },
    
    'cart.eyebrow': 'Checkout',
    'cart.title': 'Pagamento rápido e seguro.',
    'cart.desc': 'Escolha nosso método de pagamento.',
    'cart.header': 'Seu carrinho',
    'cart.empty': 'Seu carrinho está vazio. Adicione seus favoritos.',
    'cart.remove': 'Remover',
    'cart.total': 'Total',
    'cart.checkout': 'Fazer pedido',
    'cart.checkout_title': 'Detalhes da entrega',
    
    'form.name': 'Nome completo',
    'form.email': 'Email',
    'form.phone': 'Telefone',
    'form.address': 'Endereço',
    'form.payment_info': 'Pague com cartão KZ40722C000029379088. Seu cartão será cobrado após confirmação.',
    'form.card': 'Cartão KZ40722C000029379088',
    'form.submit': 'Fazer pedido',
    'form.payment_method': 'Método de pagamento',
    'form.payment_secure': '✓ O pagamento é seguro e processado com segurança através de sistemas de pagamento globais.',
    
    'toast.empty_cart': 'Seu carrinho está vazio.',
    'toast.item_added': function(name) { return name + ' adicionado ao carrinho.'; },
    'toast.not_available': 'Este produto não está disponível.',
    'toast.order_success': function(method) { return 'Pedido feito com sucesso.'; },
    'toast.product_added': 'Produto adicionado com sucesso.',
    'toast.product_updated': 'Produto atualizado.',
    'toast.product_deleted': 'Produto deletado.',
    'toast.order_status_updated': 'Status atualizado.',
    'toast.access_granted': 'Acesso concedido.',
    'toast.wrong_password': 'Senha incorreta.',
    
    'owner.title': 'Gerenciar produtos e pedidos',
    'owner.eyebrow': 'Painel do proprietário',
    'owner.add_product': 'Adicionar produto',
    'owner.orders': 'Pedidos',
    'owner.access': 'Apenas proprietário',
    'owner.password_prompt': 'Digite sua senha.',
    'owner.password': 'Senha',
    'owner.login': 'Entrar',
    'owner.product_name': 'Nome',
    'owner.category': 'Categoria',
    'owner.price': 'Preço',
    'owner.stock': 'Estoque',
    'owner.image_url': 'URL da imagem',
    'owner.description': 'Descrição',
    'owner.add': 'Adicionar',
    'owner.save': 'Salvar',
    'owner.delete': 'Deletar',
    'owner.no_orders': 'Nenhum pedido ainda.',
    'order.status.pending': 'Pendente',
    'order.status.packed': 'Embalado',
    'order.status.shipped': 'Enviado',
    'order.status.delivered': 'Entregue',
    
    'about.eyebrow': 'Sobre',
    'about.title': 'Criamos beleza premium para seu brilho diário.',
    'about.text1': 'Velora Beauty é uma marca moderna que combina cuidado, desempenho e design. Escolhemos ingredientes ativos e entrega rápida.',
    'about.text2': 'Nossa missão é ajudá-lo a se sentir confiante todos os dias.',
    
    'contacts.eyebrow': 'Contatos',
    'contacts.title': 'Entre em contato conosco.',
    'contacts.email': 'Email',
    'contacts.phone': 'Telefone',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Endereço',
    'contacts.hours': 'Horários',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Almaty, Cazaquistão',
    'contacts.hours_val': 'Seg–Dom, 09:00–21:00',
    
    'delivery.eyebrow': 'Entrega',
    'delivery.title': 'Entrega rápida em todo o mundo.',
    'delivery.text': 'Entregamos em 1-3 dias no Cazaquistão e 5-10 dias internacionalmente.',
    
    'footer': 'Velora Beauty © 2026 · Beleza premium para rituais modernos.',
    'footer.links': 'Sobre · Contatos · Entrega',
    'ask_question': 'Fazer pergunta',
  },
  'tr': {
    'nav.home': 'Anasayfa',
    'nav.about': 'Hakkımızda',
    'nav.contacts': 'İletişim',
    'nav.delivery': 'Teslimat',
    'nav.language': 'Dil',
    'nav.currency': 'Para Birimi',
    
    'hero.eyebrow': 'YENİ KOLEKSİYON · 2026',
    'hero.title': 'Rutininizi premium güzellikle yükseltin.',
    'hero.subtitle': 'Günün her saatinde parlayan cilt bakımı, makyaj ve parfümleri keşfedin.',
    'hero.cta': 'Koleksiyonu Satın Al',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': 'memnun müşteri',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': 'müşteri oyu',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'destek',
    'hero.bestseller': 'En Çok Satılan',
    'hero.product': 'Işıltılı Serum',
    'hero.product.desc': 'Niasinamid ile açıcı nemlendirme',
    
    'catalog.eyebrow': 'Katalog',
    'catalog.title': 'Her parlaklık için seçilmiş çok satanlar.',
    'catalog.desc': '12 premium ürün, dünya çapında teslimat.',
    'product.left': 'kaldı',
    'product.not_available': 'Tükendi',
    'product.add_to_cart': 'Sepete Ekle',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' kaldı'; },
    
    'cart.eyebrow': 'Ödeme',
    'cart.title': 'Hızlı ve güvenli ödeme.',
    'cart.desc': 'Ödeme seçeneğimizi seçin.',
    'cart.header': 'Sepetiniz',
    'cart.empty': 'Sepetiniz boş. Favorilerinizi ekleyin.',
    'cart.remove': 'Kaldır',
    'cart.total': 'Toplam',
    'cart.checkout': 'Siparişi Onayla',
    'cart.checkout_title': 'Kargo Detayları',
    
    'form.name': 'Tam Ad',
    'form.email': 'E-posta',
    'form.phone': 'Telefon',
    'form.address': 'Adres',
    'form.payment_info': 'KZ40722C000029379088 kartı ile ödeme yapın. Kartınız sipariş onayından sonra tahsil edilecektir.',
    'form.card': 'Kart KZ40722C000029379088',
    'form.submit': 'Siparişi Onayla',
    'form.payment_method': 'Ödeme Yöntemi',
    'form.payment_secure': '✓ Ödeme güvenli ve küresel ödeme sistemleri aracılığıyla güvenli bir şekilde işlenir.',
    
    'toast.empty_cart': 'Sepetiniz boş.',
    'toast.item_added': function(name) { return name + ' sepete eklendi.'; },
    'toast.not_available': 'Bu ürün şu anda mevcut değil.',
    'toast.order_success': function(method) { return 'Sipariş başarıyla oluşturuldu.'; },
    'toast.product_added': 'Ürün başarıyla eklendi.',
    'toast.product_updated': 'Ürün güncellendi.',
    'toast.product_deleted': 'Ürün silindi.',
    'toast.order_status_updated': 'Sipariş durumu güncellendi.',
    'toast.access_granted': 'Erişim verildi.',
    'toast.wrong_password': 'Şifre hatalı.',
    
    'owner.title': 'Ürün ve Siparişleri Yönetin',
    'owner.eyebrow': 'Yönetici Paneli',
    'owner.add_product': 'Ürün Ekle',
    'owner.orders': 'Siparişler',
    'owner.access': 'Yalnızca Yönetici',
    'owner.password_prompt': 'Şifrenizi girin.',
    'owner.password': 'Şifre',
    'owner.login': 'Giriş Yap',
    'owner.product_name': 'Ad',
    'owner.category': 'Kategori',
    'owner.price': 'Fiyat',
    'owner.stock': 'Stok',
    'owner.image_url': 'Resim URL',
    'owner.description': 'Açıklama',
    'owner.add': 'Ekle',
    'owner.save': 'Kaydet',
    'owner.delete': 'Sil',
    'owner.no_orders': 'Henüz sipariş yok.',
    'order.status.pending': 'Bekleniyor',
    'order.status.packed': 'Paketlendi',
    'order.status.shipped': 'Gönderildi',
    'order.status.delivered': 'Teslim Edildi',
    
    'about.eyebrow': 'Hakkımızda',
    'about.title': 'Günlük parlaklık için premium güzellik yaratıyoruz.',
    'about.text1': 'Velora Beauty, cilt bakımını, yüksek performansı ve güzel tasarımı birleştiren modern bir markadır. Aktif bileşenleri ve hızlı teslimatı seçiyoruz.',
    'about.text2': 'Misyonumuz, her gün özgüvenli hissetmenizi sağlamaktır.',
    
    'contacts.eyebrow': 'İletişim',
    'contacts.title': 'Bizimle iletişime geçin.',
    'contacts.email': 'E-posta',
    'contacts.phone': 'Telefon',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'Adres',
    'contacts.hours': 'Saatler',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'Almaty, Kazakistan',
    'contacts.hours_val': 'Pon–Paz, 09:00–21:00',
    
    'delivery.eyebrow': 'Teslimat',
    'delivery.title': 'Hızlı dünya çapında teslimat.',
    'delivery.text': 'Kazakistan\'da 1-3 gün içinde ve uluslararası olarak 5-10 gün içinde teslimat yapıyoruz.',
    
    'footer': 'Velora Beauty © 2026 · Modern ritüeller için premium güzellik.',
    'footer.links': 'Hakkımızda · İletişim · Teslimat',
    'ask_question': 'Soru Sor',
  },
  'ko': {
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.contacts': '연락처',
    'nav.delivery': '배송',
    'nav.language': '언어',
    'nav.currency': '통화',
    
    'hero.eyebrow': '새 컬렉션 · 2026',
    'hero.title': '프리미엄 뷰티로 당신의 루틴을 업그레이드하세요.',
    'hero.subtitle': '아침부터 밤까지 빛나는 스킨케어, 메이크업, 향수를 발견하세요.',
    'hero.cta': '컬렉션 쇼핑',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': '만족한 고객',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': '고객 평가',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': '지원',
    'hero.bestseller': '베스트셀러',
    'hero.product': '래디언트 세럼',
    'hero.product.desc': '나이아신아마이드를 함유한 브라이트닝 수분',
    
    'catalog.eyebrow': '카탈로그',
    'catalog.title': '모든 광채를 위한 베스트셀러.',
    'catalog.desc': '12개 프리미엄 제품, 전 세계 배송.',
    'product.left': '남음',
    'product.not_available': '재고 없음',
    'product.add_to_cart': '장바구니에 추가',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + ' 남음'; },
    
    'cart.eyebrow': '결제',
    'cart.title': '빠르고 안전한 결제.',
    'cart.desc': '결제 옵션을 선택하세요.',
    'cart.header': '장바구니',
    'cart.empty': '장바구니가 비어있습니다. 즐겨찾기를 추가하세요.',
    'cart.remove': '제거',
    'cart.total': '합계',
    'cart.checkout': '주문하기',
    'cart.checkout_title': '배송 정보',
    
    'form.name': '전체 이름',
    'form.email': '이메일',
    'form.phone': '휴대폰',
    'form.address': '주소',
    'form.payment_info': 'KZ40722C000029379088 카드로 결제합니다. 주문 확인 후 카드가 청구됩니다.',
    'form.card': '카드 KZ40722C000029379088',
    'form.submit': '주문하기',
    'form.payment_method': '결제 방법',
    'form.payment_secure': '✓ 결제는 안전하며 전 세계 결제 시스템을 통해 안전하게 처리됩니다.',
    
    'toast.empty_cart': '장바구니가 비어있습니다.',
    'toast.item_added': function(name) { return name + '이 장바구니에 추가되었습니다.'; },
    'toast.not_available': '현재 이 제품은 구매할 수 없습니다.',
    'toast.order_success': function(method) { return '주문이 성공적으로 완료되었습니다.'; },
    'toast.product_added': '제품이 성공적으로 추가되었습니다.',
    'toast.product_updated': '제품이 업데이트되었습니다.',
    'toast.product_deleted': '제품이 삭제되었습니다.',
    'toast.order_status_updated': '주문 상태가 업데이트되었습니다.',
    'toast.access_granted': '접근이 허용되었습니다.',
    'toast.wrong_password': '비밀번호가 잘못되었습니다.',
    
    'owner.title': '제품 및 주문 관리',
    'owner.eyebrow': '관리자 패널',
    'owner.add_product': '제품 추가',
    'owner.orders': '주문',
    'owner.access': '관리자만',
    'owner.password_prompt': '비밀번호를 입력하세요.',
    'owner.password': '비밀번호',
    'owner.login': '로그인',
    'owner.product_name': '이름',
    'owner.category': '카테고리',
    'owner.price': '가격',
    'owner.stock': '재고',
    'owner.image_url': '이미지 URL',
    'owner.description': '설명',
    'owner.add': '추가',
    'owner.save': '저장',
    'owner.delete': '삭제',
    'owner.no_orders': '아직 주문이 없습니다.',
    'order.status.pending': '대기 중',
    'order.status.packed': '포장됨',
    'order.status.shipped': '배송됨',
    'order.status.delivered': '배송됨',
    
    'about.eyebrow': '소개',
    'about.title': '일상적인 광채를 위한 프리미엄 뷰티를 만듭니다.',
    'about.text1': 'Velora Beauty는 스킨케어, 높은 성능, 아름다운 디자인을 결합한 현대적인 브랜드입니다. 우리는 활성 성분과 빠른 배송을 선택합니다.',
    'about.text2': '우리의 사명은 매일 자신감 있게 느끼도록 돕는 것입니다.',
    
    'contacts.eyebrow': '연락처',
    'contacts.title': '저희에게 연락하세요.',
    'contacts.email': '이메일',
    'contacts.phone': '휴대폰',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': '주소',
    'contacts.hours': '영업 시간',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': '알마티, 카자흐스탄',
    'contacts.hours_val': '월–일, 09:00–21:00',
    
    'delivery.eyebrow': '배송',
    'delivery.title': '빠른 전 세계 배송.',
    'delivery.text': '카자흐스탄에서는 1-3일, 국제적으로는 5-10일 내에 배송합니다.',
    
    'footer': 'Velora Beauty © 2026 · 현대적 의식을 위한 프리미엄 뷰티.',
    'footer.links': '소개 · 연락처 · 배송',
    'ask_question': '질문하기',
  },
  'ja': {
    'nav.home': 'ホーム',
    'nav.about': 'について',
    'nav.contacts': 'お問い合わせ',
    'nav.delivery': '配送',
    'nav.language': '言語',
    'nav.currency': '通貨',
    
    'hero.eyebrow': '新しいコレクション · 2026',
    'hero.title': 'プレミアムビューティであなたのルーティンをアップグレード。',
    'hero.subtitle': '朝から夜まで輝くスキンケア、メイク、香水を発見してください。',
    'hero.cta': 'コレクションを購入',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': '満足した顧客',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': '顧客評価',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': 'サポート',
    'hero.bestseller': 'ベストセラー',
    'hero.product': 'ラディアント血清',
    'hero.product.desc': 'ナイアシンアミド配合の輝く潤い',
    
    'catalog.eyebrow': 'カタログ',
    'catalog.title': 'すべての輝きのためのベストセラー。',
    'catalog.desc': '12個のプレミアム製品、世界中配送。',
    'product.left': '残り',
    'product.not_available': '在庫なし',
    'product.add_to_cart': 'カートに追加',
    'product.order_whatsapp': '📞 WhatsApp',
    'product.order_instagram': '📷 Instagram',
    'product.qty_left': function(count) { return count + '残り'; },
    
    'cart.eyebrow': '支払い',
    'cart.title': '高速で安全な支払い。',
    'cart.desc': '支払いオプションを選択してください。',
    'cart.header': 'カート',
    'cart.empty': 'カートが空です。お気に入りを追加してください。',
    'cart.remove': '削除',
    'cart.total': '合計',
    'cart.checkout': 'チェックアウト',
    'cart.checkout_title': '配送詳細',
    
    'form.name': 'フルネーム',
    'form.email': 'メール',
    'form.phone': '電話',
    'form.address': 'アドレス',
    'form.payment_info': 'KZ40722C000029379088カードで支払い。注文確認後、カードが請求されます。',
    'form.card': 'カード KZ40722C000029379088',
    'form.submit': 'チェックアウト',
    'form.payment_method': 'お支払い方法',
    'form.payment_secure': '✓ お支払いは安全で、グローバル決済システムを通じて安全に処理されます。',
    
    'toast.empty_cart': 'カートが空です。',
    'toast.item_added': function(name) { return name + 'がカートに追加されました。'; },
    'toast.not_available': 'この製品は現在利用できません。',
    'toast.order_success': function(method) { return '注文が正常に送信されました。'; },
    'toast.product_added': '製品が正常に追加されました。',
    'toast.product_updated': '製品が更新されました。',
    'toast.product_deleted': '製品が削除されました。',
    'toast.order_status_updated': '注文ステータスが更新されました。',
    'toast.access_granted': 'アクセスが許可されました。',
    'toast.wrong_password': 'パスワードが正しくありません。',
    
    'owner.title': '製品と注文を管理',
    'owner.eyebrow': '管理者パネル',
    'owner.add_product': '製品追加',
    'owner.orders': '注文',
    'owner.access': '管理者のみ',
    'owner.password_prompt': 'パスワードを入力してください。',
    'owner.password': 'パスワード',
    'owner.login': 'ログイン',
    'owner.product_name': '名前',
    'owner.category': 'カテゴリー',
    'owner.price': '価格',
    'owner.stock': '在庫',
    'owner.image_url': '画像URL',
    'owner.description': '説明',
    'owner.add': '追加',
    'owner.save': '保存',
    'owner.delete': '削除',
    'owner.no_orders': 'まだ注文がありません。',
    'order.status.pending': '保留中',
    'order.status.packed': 'パック済み',
    'order.status.shipped': '出荷済み',
    'order.status.delivered': '配送完了',
    
    'about.eyebrow': 'について',
    'about.title': '毎日の輝きのためのプレミアムビューティを作成します。',
    'about.text1': 'Velora Beautyはスキンケア、高性能、美しいデザインを組み合わせた現代的なブランドです。積極的な成分と迅速な配送を選択します。',
    'about.text2': '私たちの使命は、毎日自信を持つのをお手伝いすることです。',
    
    'contacts.eyebrow': 'お問い合わせ',
    'contacts.title': 'お問い合わせください。',
    'contacts.email': 'メール',
    'contacts.phone': '電話',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': 'アドレス',
    'contacts.hours': '営業時間',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': 'アルマティ、カザフスタン',
    'contacts.hours_val': '月–日、09:00–21:00',
    
    'delivery.eyebrow': '配送',
    'delivery.title': '迅速な世界配送。',
    'delivery.text': 'カザフスタンでは1-3日、国際的には5-10日以内に配送します。',
    
    'footer': 'Velora Beauty © 2026 · モダンリチュアル向けプレミアムビューティ。',
    'footer.links': 'について · お問い合わせ · 配送',
    'ask_question': '質問する',
  },
  'zh': {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.contacts': '联系',
    'nav.delivery': '配送',
    'nav.language': '语言',
    'nav.currency': '货币',
    
    'hero.eyebrow': '新系列 · 2026',
    'hero.title': '用高级美容升级你的护肤程序。',
    'hero.subtitle': '从早到晚发现为光彩而打造的护肤、彩妆和香水。',
    'hero.cta': '购买系列',
    'hero.stat1.title': '12k+',
    'hero.stat1.label': '满意的客户',
    'hero.stat2.title': '4.9/5',
    'hero.stat2.label': '客户评分',
    'hero.stat3.title': '24/7',
    'hero.stat3.label': '支持',
    'hero.bestseller': '畅销产品',
    'hero.product': '光彩精华',
    'hero.product.desc': '含烟酰胺的明亮保湿',
    
    'catalog.eyebrow': '目录',
    'catalog.title': '为每一种光彩精心挑选的畅销产品。',
    'catalog.desc': '12件高级产品，全球配送。',
    'product.left': '剩余',
    'product.not_available': '缺货',
    'product.add_to_cart': '加入购物车',
    'product.qty_left': function(count) { return count + '剩余'; },
    
    'cart.eyebrow': '结账',
    'cart.title': '快速安全的付款。',
    'cart.desc': '选择我们的付款选项。',
    'cart.header': '购物车',
    'cart.empty': '购物车为空。添加您的最爱。',
    'cart.remove': '删除',
    'cart.total': '总计',
    'cart.checkout': '结账',
    'cart.checkout_title': '配送详情',
    
    'form.name': '全名',
    'form.email': '电子邮件',
    'form.phone': '电话',
    'form.address': '地址',
    'form.payment_info': '使用卡 KZ40722C000029379088 支付。订单确认后将收费。',
    'form.card': '卡 KZ40722C000029379088',
    'form.submit': '下单',
    'form.payment_method': '支付方式',
    'form.payment_secure': '✓ 支付安全且通过全球支付系统安全处理。',
    
    'toast.empty_cart': '购物车为空。',
    'toast.item_added': function(name) { return name + '已添加到购物车。'; },
    'toast.not_available': '此产品暂不可用。',
    'toast.order_success': function(method) { return '订单已成功提交。'; },
    'toast.product_added': '产品已成功添加。',
    'toast.product_updated': '产品已更新。',
    'toast.product_deleted': '产品已删除。',
    'toast.order_status_updated': '订单状态已更新。',
    'toast.access_granted': '已授予访问权限。',
    'toast.wrong_password': '密码错误。',
    
    'owner.title': '管理产品和订单',
    'owner.eyebrow': '管理员面板',
    'owner.add_product': '添加产品',
    'owner.orders': '订单',
    'owner.access': '仅限管理员',
    'owner.password_prompt': '输入密码。',
    'owner.password': '密码',
    'owner.login': '登录',
    'owner.product_name': '名称',
    'owner.category': '类别',
    'owner.price': '价格',
    'owner.stock': '库存',
    'owner.image_url': '图片网址',
    'owner.description': '描述',
    'owner.add': '添加',
    'owner.save': '保存',
    'owner.delete': '删除',
    'owner.no_orders': '尚无订单。',
    'order.status.pending': '待定',
    'order.status.packed': '已包装',
    'order.status.shipped': '已发货',
    'order.status.delivered': '已送达',
    
    'about.eyebrow': '关于',
    'about.title': '我们为日常光彩打造高级美容。',
    'about.text1': 'Velora Beauty 是一个现代品牌，结合了护肤、高性能和美丽设计。我们选择活性成分和快速配送。',
    'about.text2': '我们的使命是帮助您每天充满信心。',
    
    'contacts.eyebrow': '联系',
    'contacts.title': '与我们联系。',
    'contacts.email': '电子邮件',
    'contacts.phone': '电话',
    'contacts.whatsapp': 'WhatsApp',
    'contacts.address': '地址',
    'contacts.hours': '营业时间',
    'contacts.email_val': 'hello@velorabeauty.com',
    'contacts.phone_val': '+7 705 670 80 20',
    'contacts.address_val': '阿拉木图，哈萨克斯坦',
    'contacts.hours_val': '周一–周日，09:00–21:00',
    
    'delivery.eyebrow': '配送',
    'delivery.title': '快速全球配送。',
    'delivery.text': '我们在哈萨克斯坦在 1-3 天内配送，国际配送 5-10 天内。',
    
    'footer': 'Velora Beauty © 2026 · 现代仪式高级美容。',
    'footer.links': '关于 · 联系 · 配送',
    'ask_question': '问问题',
  },
};

// Функции для работы с локалью и переводами
let currentLocale = localStorage.getItem('velora-locale') || detectUserLocale();
let currentCurrency = SUPPORTED_LOCALES[currentLocale].currency;

function detectUserLocale() {
  const browserLang = navigator.language || 'ru';
  
  // Точное совпадение
  if (SUPPORTED_LOCALES[browserLang]) return browserLang;
  
  // Совпадение по базовому языку
  const baseLang = browserLang.split('-')[0];
  for (const locale of Object.keys(SUPPORTED_LOCALES)) {
    if (locale.split('-')[0] === baseLang) return locale;
  }
  
  return 'ru'; // По умолчанию русский
}

function setLocale(locale) {
  if (!SUPPORTED_LOCALES[locale]) return;
  currentLocale = locale;
  currentCurrency = SUPPORTED_LOCALES[locale].currency;
  localStorage.setItem('velora-locale', locale);
  
  const html = document.documentElement;
  html.lang = SUPPORTED_LOCALES[locale].lang;
  if (SUPPORTED_LOCALES[locale].rtl) {
    html.dir = 'rtl';
  } else {
    html.dir = 'ltr';
  }
  
  location.reload();
}

function setCurrency(currency) {
  currentCurrency = currency;
  localStorage.setItem('velora-currency', currency);
  renderProducts();
  renderCart();
}

function t(key, ...args) {
  const translation = TRANSLATIONS[SUPPORTED_LOCALES[currentLocale].lang] || TRANSLATIONS['en'];
  let text = translation[key] || key;
  
  if (typeof text === 'function') {
    return text(...args);
  }
  return text;
}

function updateTranslations() {
  // Обновить все элементы с data-i18n-key атрибутом
  document.querySelectorAll('[data-i18n-key]').forEach((el) => {
    const key = el.getAttribute('data-i18n-key');
    el.textContent = t(key);
  });
  
  // Обновить элементы с data-i18n-placeholder атрибутом
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  
  // Обновить элементы с data-i18n-title атрибутом
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });
}

function openWhatsApp(productName, price) {
  const message = `Здравствуйте! Я интересуюсь товаром: ${productName} (${formatPrice(price)}). Расскажите подробнее, пожалуйста.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${SOCIAL_CONTACTS.whatsapp.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
}

function openInstagram() {
  if (SOCIAL_CONTACTS.instagram) { window.open(`https://instagram.com/${SOCIAL_CONTACTS.instagram}`, '_blank'); }
}

function normalizePrice(value) {
  const num = Number(value || 0);
  return Math.floor(num / 1000) * 1000 + 990;
}

function formatPrice(price) {
  const converted = normalizePrice(price * EXCHANGE_RATES[currentCurrency]);
  const currencySymbols = {
    'KZT': '₸',
    'USD': '$',
    'GBP': '£',
    'SAR': '﷼',
    'EUR': '€',
    'RUB': '₽',
    'KRW': '₩',
    'JPY': '¥',
    'CNY': '¥'
  };
  
  const formatter = new Intl.NumberFormat(
    SUPPORTED_LOCALES[currentLocale].lang,
    { minimumFractionDigits: 0, maximumFractionDigits: 2 }
  );
  
  return currencySymbols[currentCurrency] + formatter.format(converted);
}

// Продукты с переводами названий
const productTranslations = {
  1: { ru: 'Сияющая сыворотка', en: 'Radiant Serum', ar: 'سيروم التألق', de: 'Strahlenserum', fr: 'Sérum Éclat', es: 'Sérum Radiante', it: 'Siero Radioso', pt: 'Sérum Radiante', tr: 'Işıltılı Serum', ko: '래디언트 세럼', ja: 'ラディアント血清', zh: '光彩精华' },
  2: { ru: 'Velora Velvet Blush', en: 'Velora Velvet Blush', ar: 'Velora Velvet Blush', de: 'Velora Velvet Blush', fr: 'Velora Velvet Blush', es: 'Velora Velvet Blush', it: 'Velora Velvet Blush', pt: 'Velora Velvet Blush', tr: 'Velora Velvet Blush', ko: 'Velora Velvet Blush', ja: 'Velora Velvet Blush', zh: 'Velora Velvet Blush' },
  3: { ru: 'Лунная тушь', en: 'Moon Mascara', ar: 'ماسكرا القمر', de: 'Mond-Wimperntusche', fr: 'Mascara Lune', es: 'Máscara Lunar', it: 'Mascara della Luna', pt: 'Rímel da Lua', tr: 'Ay Maskası', ko: '문 마스카라', ja: 'ムーンマスカラ', zh: '月光睫毛膏' },
  4: { ru: 'Шелковый увлажняющий крем', en: 'Silky Hydrating Cream', ar: 'كريم ترطيب الحرير', de: 'Seideige Feuchtigkeitscreme', fr: 'Crème Hydratante Soyeuse', es: 'Crema Hidratante Sedosa', it: 'Crema Idratante Setosa', pt: 'Creme Hidratante de Seda', tr: 'İpeksi Nemlendirici Krem', ko: '실크 보습 크림', ja: 'シルキーハイドレーティングクリーム', zh: '丝滑保湿面霜' },
  5: { ru: 'Масло для тела с розой', en: 'Rose Body Oil', ar: 'زيت الجسم بالورد', de: 'Rosen-Körperöl', fr: 'Huile Corporelle Rose', es: 'Aceite Corporal de Rosa', it: 'Olio Corpo Rosa', pt: 'Óleo Corporal de Rosa', tr: 'Gül Vücut Yağı', ko: '로즈 바디 오일', ja: 'ローズボディオイル', zh: '玫瑰身体油' },
  6: { ru: 'Ночной аромат', en: 'Night Fragrance', ar: 'عطر الليل', de: 'Nacht-Duft', fr: 'Parfum Nocturne', es: 'Fragancia Nocturna', it: 'Fragranza Notturna', pt: 'Fragrância Noturna', tr: 'Gece Kokusu', ko: '나이트 프래그런스', ja: 'ナイトフレグランス', zh: '夜间香氛' },
  7: { ru: 'Облачный праймер', en: 'Cloud Primer', ar: 'برايمر السحابة', de: 'Wolken-Primer', fr: 'Primer Nuage', es: 'Primer Nube', it: 'Primer Nuvola', pt: 'Primer Nuvem', tr: 'Bulut Primeri', ko: '클라우드 프라이머', ja: 'クラウドプライマー', zh: '云彩底妆液' },
  8: { ru: 'Успокаивающий гель-контур', en: 'Soothing Gel Contour', ar: 'جل التحديد المهدئ', de: 'Beruhigendes Gel-Kontur', fr: 'Gel Contour Apaisant', es: 'Gel Contorno Calmante', it: 'Gel Contorno Lenitivo', pt: 'Gel Contorno Calmante', tr: 'Yatıştırıcı Jel Konturu', ko: '진정 젤 컨투어', ja: '落ち着きジェルコンター', zh: '舒缓凝胶轮廓' },
};

const productDescriptions = {
  1: {
    ru: 'Осветляющая сыворотка с ниацинамидом и витамином C для естественного сияния.',
    en: 'Brightening serum with niacinamide and vitamin C for natural radiance.',
    ar: 'مصل مبيض مع النياسيناميد وفيتامين C للإشراق الطبيعي.',
    de: 'Aufhellendes Serum mit Niacinamid und Vitamin C für natürliche Ausstrahlung.',
    fr: 'Sérum éclaircissant à la niacinamide et vitamine C pour un éclat naturel.',
    es: 'Sérum iluminador con niacinamida y vitamina C para un brillo natural.',
    it: 'Siero schiarente con niacinamide e vitamina C per luminosità naturale.',
    pt: 'Soro iluminador com niacinamida e vitamina C para brilho natural.',
    tr: 'Niasinamid ve C vitamini içeren aydınlatıcı serum doğal parlaklık için.',
    ko: '니아신아마이드와 비타민 C가 함유된 브라이트닝 세럼으로 자연스러운 광채.',
    ja: 'ナイアシンアミドとビタミンCを含むブライトニングセラム自然な輝きのために。',
    zh: '含烟酰胺和维生素C的亮白精华，打造自然光彩。'
  },
  2: {
    ru: 'Покраснение в формате крема, которое легко растушевывается и выглядит естественно.',
    en: 'Cream blush that blends effortlessly and looks naturally beautiful.',
    ar: 'أحمر خدود كريمي يمزج بسهولة ويبدو طبيعياً.',
    de: 'Cremiger Wangenpuder, der sich mühelos verblenden lässt und natürlich aussieht.',
    fr: 'Blush crème qui se fond sans effort et paraît naturel.',
    es: 'Rubor en crema que se difumina sin esfuerzo y se ve natural.',
    it: 'Blush cremoso che sfuma facilmente e appare naturale.',
    pt: 'Blush em creme que se mistura facilmente e fica natural.',
    tr: 'Kolayca karışan ve doğal görünen krem blush.',
    ko: '손쉽게 블렌딩되고 자연스러운 크림 블러시.',
    ja: 'どんな肌色にも合わせやすい自然なクリームブラッシュ。',
    zh: '易于晕染，显色自然的奶油腮红。'
  },
  3: {
    ru: 'Подкрученные ресницы с устойчивым к смазыванию эффектом на весь день.',
    en: 'Lifted lashes with smudge-proof formula that lasts all day.',
    ar: 'رموش مرفوعة مع صيغة مقاومة للتلطيخ تدوم طوال اليوم.',
    de: 'Gewölbte Wimpern mit wischfester Formel für den ganzen Tag.',
    fr: 'Cils levés avec formule résistante aux bavures qui dure toute la journée.',
    es: 'Pestañas arqueadas con fórmula a prueba de manchas que dura todo el día.',
    it: 'Ciglia sollevate con formula a prova di sbavature che dura tutto il giorno.',
    pt: 'Cílios levantados com fórmula à prova de manchas que dura o dia todo.',
    tr: 'Kaldırılmış kirpikler ile sürülmeye dayanıklı formül bütün gün dayanır.',
    ko: '하루종일 지워지지 않는 컬링된 속눈썹 마스카라.',
    ja: '一日中ウォータープルーフのカールするマスカラ。',
    zh: '整日防晕的卷翘睫毛膏。'
  },
  4: {
    ru: 'Легкое увлажнение с керамидами и бархатистым сатиновым финишем.',
    en: 'Lightweight hydration with ceramides and silky satin finish.',
    ar: 'ترطيب خفيف الوزن مع السيراميد وتشطيب ساتان حريري.',
    de: 'Leichte Feuchtigkeitspflege mit Keramiden und seideigem Satin-Finish.',
    fr: 'Hydratation légère avec céramides et fini soyeux satiné.',
    es: 'Hidratación ligera con ceramidas y acabado satinado de seda.',
    it: 'Idratazione leggera con ceramidi e finitura satin setosa.',
    pt: 'Hidratação leve com ceramidas e acabamento satinado sedoso.',
    tr: 'Seramidler ile hafif nemlendiriciliği ve ipeksi saten taklidi.',
    ko: '세라마이드가 함유된 가벼운 보습과 실크같은 새틴 마무리.',
    ja: 'セラマイド配合の軽いハイドレーションとシルキーサテンフィニッシュ。',
    zh: '含陶土和丝绸般哑光妆感的轻盈保湿面霜。'
  },
  5: {
    ru: 'Питательное масло с розовым ши и жасмином для мягкой и сияющей кожи.',
    en: 'Nourishing oil with shea rose and jasmine for soft, glowing skin.',
    ar: 'زيت مغذٍ مع ورد الشيا والياسمين للجلد الناعم والمشع.',
    de: 'Pflegendes Öl mit rosa Shea und Jasmin für weiches, strahlendes Haar.',
    fr: 'Huile nourrissante à la rose de karité et jasmin pour une peau douce et rayonnante.',
    es: 'Aceite nutritivo con rosa de karité y jazmín para una piel suave y radiante.',
    it: 'Olio nutriente con rosa shea e gelsomino per pelle morbida e luminosa.',
    pt: 'Óleo nutritivo com rosa de karité e jasmim para pele macia e brilhante.',
    tr: 'Shea gülü ve yaseminli besleyici yağ yumuşak ve parlak cilt için.',
    ko: '시어로즈와 자스민이 함유된 영양 오일로 부드럽고 윤기있는 피부.',
    ja: 'シアローズとジャスミンを含む栄養オイルで柔らかく輝く肌へ。',
    zh: '含乳木果油玫瑰和茉莉花的滋养油，令肌肤柔软光泽。'
  },
  6: {
    ru: 'Чувственный букет из черной сливы, кедра и мягкого амбры.',
    en: 'Sensual bouquet of blackplum, cedarwood, and soft amber.',
    ar: 'باقة حسية من الكمثرى السوداء والأرز والكهرمان الناعم.',
    de: 'Sinnlicher Blumenstrauß aus schwarzer Pflaume, Zedernholz und weichem Amber.',
    fr: 'Bouquet sensuel de prune noire, cèdre et ambre doux.',
    es: 'Ramo sensual de ciruela negra, cedro y ámbar suave.',
    it: 'Bouquet sensuale di prugna nera, cedro e ambra morbida.',
    pt: 'Buquê sensual de ameixa preta, cedro e âmbar suave.',
    tr: 'Siyah erik, sedefli ağaç ve yumuşak amber kokusunun duygusal buketi.',
    ko: '검은 매실, 삼목, 부드러운 앰버의 관능적인 향기.',
    ja: '黒梅、シダーウッド、柔らかいアンバーの官能的なブーケ。',
    zh: '黑梅、雪松和柔和琥珀的感官花束。'
  },
  7: {
    ru: 'Легкий праймер, который выравнивает текстуру кожи и продлевает стойкость макияжа.',
    en: 'Lightweight primer that evens skin texture and extends makeup wear.',
    ar: 'برايمر خفيف الوزن يوازن نسيج الجلد ويطيل ثبات المكياج.',
    de: 'Leichter Primer, der die Hautstruktur ausgleicht und die Make-up-Haftung verlängert.',
    fr: 'Primer léger qui unifie la texture de la peau et prolonge la tenue du maquillage.',
    es: 'Primer ligero que iguala la textura de la piel y prolonga la duración del maquillaje.',
    it: 'Primer leggero che uniforma la texture della pelle e prolunga la tenuta del trucco.',
    pt: 'Primer leve que iguala a textura da pele e estende a duração da maquiagem.',
    tr: 'Cilt dokusunu düzelten ve makyajın ömrünü uzatan hafif primer.',
    ko: '피부 질감을 정돈하고 메이크업 지속력을 연장하는 가벼운 프라이머.',
    ja: '肌の質感を均等にし、メイクアップの持ちを延ばす軽いプライマー。',
    zh: '轻盈底妆液，均匀肤质纹理，延长彩妆持久度。'
  },
  8: {
    ru: 'Нежный очищающий гель с цитрусовыми и алоэ для свежего начала дня.',
    en: 'Gentle cleansing gel with citrus and aloe for a fresh start.',
    ar: 'جل تنظيف لطيف مع الحمضيات والصبار لبداية منعشة.',
    de: 'Sanftes Reinigungsgel mit Zitrusfrüchten und Aloe für einen frischen Start.',
    fr: 'Gel nettoyant doux aux agrumes et aloe vera pour un nouveau départ frais.',
    es: 'Gel limpiador suave con cítricos y aloe para un comienzo fresco.',
    it: 'Gel detergente delicato con agrumi e aloe per un nuovo inizio fresco.',
    pt: 'Gel de limpeza suave com cítricos e aloe para um começo fresco.',
    tr: 'Sitrus ve aloea içeren yumuşak temizleme jeli taze bir başlangıç için.',
    ko: '감귤과 알로에가 함유된 부드러운 클렌징 젤로 상큼한 하루 시작.',
    ja: 'シトラスとアロエを含む優しいクレンジングジェルで新鮮なスタート。',
    zh: '含柑橘和芦荟的温和洁面胶，焕活肌肤。'
  }
};

function getLocalizedProductDescription(productId) {
  const lang = SUPPORTED_LOCALES[currentLocale].lang;
  return (productDescriptions[productId] && productDescriptions[productId][lang]) || 
         (productDescriptions[productId] && productDescriptions[productId]['ru']) || 
         'Описание товара';
}

const initialProducts = [
  { id: 1, name: 'Сияющая сыворотка', category: 'Уход за кожей', price: normalizePrice(16800), stock: 14, description: 'Осветляющая сыворотка с ниацинамидом и витамином C для естественного сияния.', image: 'images/product1.jpg' },
  { id: 2, name: 'Velora Velvet Blush', category: 'Макияж', price: normalizePrice(16800), stock: 21, description: 'Покраснение в формате крема, которое легко растушевывается и выглядит естественно.', image: 'images/product2.jpg' },
  { id: 3, name: 'Лунная тушь', category: 'Макияж', price: normalizePrice(9800), stock: 17, description: 'Подкрученные ресницы с устойчивым к смазыванию эффектом на весь день.', image: 'images/product3.jpg' },
  { id: 4, name: 'Шелковый увлажняющий крем', category: 'Уход за кожей', price: normalizePrice(12600), stock: 9, description: 'Легкое увлажнение с керамидами и бархатистым сатиновым финишем.', image: 'images/product4.jpg' },
  { id: 5, name: 'Масло для тела с розой', category: 'Тело', price: normalizePrice(15400), stock: 11, description: 'Питательное масло с розовым ши и жасмином для мягкой и сияющей кожи.', image: 'images/product5.jpg' },
  { id: 6, name: 'Ночной аромат', category: 'Парфюмерия', price: normalizePrice(25900), stock: 6, description: 'Чувственный букет из черной сливы, кедра и мягкого амбры.', image: 'images/product6.jpg' },
  { id: 7, name: 'Облачный праймер', category: 'Макияж', price: normalizePrice(10500), stock: 15, description: 'Легкий праймер, который выравнивает текстуру кожи и продлевает стойкость макияжа.', image: 'images/product7.jpg' },
  { id: 8, name: 'Успокаивающий гель-контур', category: 'Уход за кожей', price: normalizePrice(10500), stock: 18, description: 'Нежный очищающий гель с цитрусовыми и алоэ для свежего начала дня.', image: 'images/product8.jpg' }
];

let products = (JSON.parse(localStorage.getItem('velora-products')) || initialProducts).map((product) => ({
  ...product,
  price: normalizePrice(product.price)
}));
let cart = JSON.parse(localStorage.getItem('velora-cart')) || [];
let orders = JSON.parse(localStorage.getItem('velora-orders')) || [];

const productGrid = document.getElementById('product-grid');
const cartItems = document.getElementById('cart-items');
const ownerProducts = document.getElementById('owner-products');
const orderList = document.getElementById('order-list');
const checkoutForm = document.getElementById('checkout-form');
const addProductForm = document.getElementById('add-product-form');
const ownerAccessForm = document.getElementById('owner-access-form');
const ownerGate = document.getElementById('owner-gate');
const ownerPanelContent = document.getElementById('owner-panel-content');
const toast = document.getElementById('toast');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const OWNER_PASSWORD = 'kosmetika eng12';
const CARD_NUMBER = 'KZ40722C000029379088';

// Социальные сети и контакты
const SOCIAL_CONTACTS = {
  whatsapp: '+77056708020',
  instagram: ''
};

function isOwnerAuthenticated() {
  return localStorage.getItem('velora-owner-auth') === 'true';
}

function renderOwnerAccessState() {
  if (!ownerGate || !ownerPanelContent) return;
  if (isOwnerAuthenticated()) {
    ownerGate.hidden = true;
    ownerPanelContent.hidden = false;
    return;
  }
  ownerGate.hidden = false;
  ownerPanelContent.hidden = true;
}

function getSortedProducts() {
  return [...products].sort((a, b) => Number(b.price) - Number(a.price));
}

function saveState() {
  products = getSortedProducts().map((product) => ({
    ...product,
    price: normalizePrice(product.price)
  }));
  localStorage.setItem('velora-products', JSON.stringify(products));
  localStorage.setItem('velora-cart', JSON.stringify(cart));
  localStorage.setItem('velora-orders', JSON.stringify(orders));
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

function getLocalizedProductName(productId) {
  const lang = SUPPORTED_LOCALES[currentLocale].lang;
  return productTranslations[productId]?.[lang] || 'Product';
}

function renderProducts() {
  if (!productGrid) return;
  const sortedProducts = getSortedProducts();
  productGrid.innerHTML = sortedProducts
    .map((product) => {
      const localizedName = getLocalizedProductName(product.id);
      const localizedDesc = getLocalizedProductDescription(product.id);
      return `
        <article class="product-card">
          <img src="${product.image}" alt="${localizedName}" />
          <div class="product-card-body">
            <div class="product-meta">
              <span>${product.category}</span>
              <span>${product.stock > 0 ? t('product.qty_left', product.stock) : t('product.not_available')}</span>
            </div>
            <h3>${localizedName}</h3>
            <p>${localizedDesc}</p>
            <div class="price-row">
              <strong>${formatPrice(product.price)}</strong>
              <button class="primary-btn" data-action="add-to-cart" data-id="${product.id}">${t('product.add_to_cart')}</button>
            </div>
            <div class="social-buttons">
              <button class="social-btn whatsapp" onclick="openWhatsApp('${localizedName}', ${product.price})">📞 ${t('product.order_whatsapp')}</button>
              <button class="social-btn instagram" onclick="openInstagram()">📷 ${t('product.order_instagram')}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderCart() {
  if (!cartItems) return;
  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-state">${t('cart.empty')}</div>`;
    return;
  }
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemMarkup = cart
    .map((item) => {
      const localizedName = getLocalizedProductName(item.id);
      return `
        <div class="cart-item">
          <div>
            <strong>${localizedName}</strong>
            <div class="qty-controls">
              <button data-action="decrease" data-id="${item.id}">−</button>
              <span>${item.quantity}</span>
              <button data-action="increase" data-id="${item.id}">+</button>
            </div>
          </div>
          <div>
            <div>${formatPrice(item.price * item.quantity)}</div>
            <button class="small-btn" data-action="remove" data-id="${item.id}">${t('cart.remove')}</button>
          </div>
        </div>
      `;
    })
    .join('');

  cartItems.innerHTML = `
    ${itemMarkup}
    <div class="summary">
      <span>${t('cart.total')}</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="payment-info">
      <p>${t('form.payment_info')}</p>
    </div>
  `;
}

function renderOwnerProducts() {
  if (!ownerProducts) return;
  const sortedProducts = getSortedProducts();
  ownerProducts.innerHTML = sortedProducts
    .map((product) => {
      const localizedName = getLocalizedProductName(product.id);
      return `
        <div class="owner-product">
          <img class="owner-product-image" src="${product.image}" alt="${localizedName}" data-action="select-product-for-order" data-id="${product.id}" />
          <strong>${localizedName}</strong>
          <form data-action="update-product" data-id="${product.id}">
            <label>
              ${t('owner.price')}
              <input type="number" name="price" value="${product.price}" min="0" step="1" />
            </label>
            <label>
              ${t('owner.stock')}
              <input type="number" name="stock" value="${product.stock}" min="0" step="1" />
            </label>
            <button class="small-btn" type="submit">${t('owner.save')}</button>
            <button class="small-btn" type="button" data-action="select-product-for-order" data-id="${product.id}">Добавить в заказ</button>
            <button class="danger-btn" type="button" data-action="delete-product" data-id="${product.id}">${t('owner.delete')}</button>
          </form>
        </div>
      `;
    })
    .join('');

  const orderProductSelect = document.getElementById('order-product-select');
  if (!orderProductSelect) return;
  orderProductSelect.innerHTML = ['<option value="">Выберите товар</option>']
    .concat(
      sortedProducts.map((product) => `<option value="${product.id}">${getLocalizedProductName(product.id)}</option>`)
    )
    .join('');
}

function renderOrders() {
  if (!orderList) return;
  if (!orders.length) {
    orderList.innerHTML = `<div class="empty-state">${t('owner.no_orders')}</div>`;
    return;
  }
  orderList.innerHTML = orders
    .map((order) => `
      <article class="order-card">
        <strong>#${order.id}</strong>
        <p>${order.customerName} · ${order.email}</p>
        <p>${order.items.map((item) => {
          const localizedName = getLocalizedProductName(item.id);
          return `${localizedName} × ${item.quantity}`;
        }).join(', ')}</p>
        <p>${t('cart.total')}: ${formatPrice(order.total)}</p>
        <p>${t('form.card')}</p>
        <span class="status-pill">${t('order.status.' + order.status.toLowerCase())}</span>
        <select data-action="order-status" data-id="${order.id}" style="margin-top: 8px; width: 100%;">
          <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>${t('order.status.pending')}</option>
          <option value="Packed" ${order.status === 'Packed' ? 'selected' : ''}>${t('order.status.packed')}</option>
          <option value="Shipped" ${order.status === 'Shipped' ? 'selected' : ''}>${t('order.status.shipped')}</option>
          <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>${t('order.status.delivered')}</option>
        </select>
        <button class="danger-btn" type="button" data-action="delete-order" data-id="${order.id}" style="margin-top: 12px; width: 100%;">Удалить заказ</button>
      </article>
    `)
    .join('');
}

function addToCart(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;
  if (product.stock <= 0) {
    showToast(t('toast.not_available'));
    return;
  }
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  }
  saveState();
  renderCart();
  const localizedName = getLocalizedProductName(product.id);
  showToast(t('toast.item_added', localizedName));
}

function updateCartQuantity(productId, delta) {
  const item = cart.find((entry) => entry.id === Number(productId));
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== Number(productId));
  }
  saveState();
  renderCart();
}

function removeCartItem(productId) {
  cart = cart.filter((entry) => entry.id !== Number(productId));
  saveState();
  renderCart();
}

function handlePaymentMethodChange() {
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value;
  const cardElement = document.getElementById('card-element');
  if (!cardElement) return;
  
  if (paymentMethod === 'card') {
    cardElement.style.display = 'block';
  } else {
    cardElement.style.display = 'none';
  }
}

function processPayment(paymentMethod, amount, currency, customerEmail) {
  return new Promise((resolve) => {
    // Демо обработка платежа
    setTimeout(() => {
      const paymentMethods = {
        'card': '💳 Кредитная карта',
        'paypal': '🅿️ PayPal',
        'apple': '🍎 Apple Pay',
        'google': '🔵 Google Pay'
      };
      
      // Успешный платеж
      resolve({
        success: true,
        transactionId: 'TXN_' + Date.now(),
        method: paymentMethods[paymentMethod],
        amount: amount,
        currency: currency
      });
    }, 1500);
  });
}

function handleCheckout(event) {
  event.preventDefault();
  
  if (!cart.length) {
    showToast(t('toast.empty_cart'));
    return;
  }

  const formData = new FormData(checkoutForm);
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'card';
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const submitBtn = checkoutForm.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  
  // Показать статус обработки
  submitBtn.disabled = true;
  submitBtn.textContent = '⏳ Обработка платежа...';
  
  const paymentMethods = {
    'card': '💳 Кредитная карта',
    'paypal': '🅿️ PayPal',
    'apple': '🍎 Apple Pay',
    'google': '🔵 Google Pay'
  };

  // Обработать платеж
  processPayment(paymentMethod, total, currentCurrency, formData.get('email'))
    .then(paymentResult => {
      if (paymentResult.success) {
        const order = {
          id: Date.now(),
          customerName: formData.get('name') || 'Guest',
          email: formData.get('email') || 'unknown@example.com',
          phone: formData.get('phone') || 'N/A',
          address: formData.get('address') || 'N/A',
          paymentMethod: paymentMethods[paymentMethod],
          paymentId: paymentResult.transactionId,
          items: cart.map((item) => ({ ...item })),
          total,
          status: 'Confirmed',
          currency: currentCurrency
        };
        
        orders.unshift(order);
        cart = [];
        saveState();
        renderCart();
        renderOrders();
        checkoutForm.reset();
        
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        
        showToast(`✅ ${t('toast.order_success')} ID: ${paymentResult.transactionId}`);
        
        // Сбросить выбор метода оплаты
        handlePaymentMethodChange();
      }
    })
    .catch(error => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      showToast('❌ Ошибка при обработке платежа. Попробуйте ещё раз.');
    });
}

function handleAddProduct(event) {
  event.preventDefault();
  const formData = new FormData(addProductForm);
  const newProduct = {
    id: Date.now(),
    name: formData.get('name') || 'New Product',
    category: formData.get('category') || 'Beauty',
    price: normalizePrice(Number(formData.get('price')) || 0),
    stock: Number(formData.get('stock')) || 0,
    description: formData.get('description') || 'A new premium beauty essential.',
    image: formData.get('image') || 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80'
  };
  products.push(newProduct);
  saveState();
  renderProducts();
  renderOwnerProducts();
  addProductForm.reset();
  showToast(t('toast.product_added'));
}

function handleProductUpdate(event) {
  event.preventDefault();
  const form = event.target.closest('form[data-action="update-product"]');
  if (!form) return;
  const productId = Number(form.dataset.id);
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  product.price = normalizePrice(Number(form.price.value) || 0);
  product.stock = Number(form.stock.value) || 0;
  products = getSortedProducts();
  saveState();
  renderProducts();
  renderOwnerProducts();
  showToast(t('toast.product_updated'));
}

function handleDeleteProduct(productId) {
  products = products.filter((item) => item.id !== Number(productId));
  cart = cart.filter((item) => item.id !== Number(productId));
  saveState();
  renderProducts();
  renderCart();
  renderOwnerProducts();
  showToast(t('toast.product_deleted'));
}

function handleSelectProductForOrder(productId) {
  const orderProductSelect = document.getElementById('order-product-select');
  if (!orderProductSelect) return;

  orderProductSelect.value = String(productId);
  orderProductSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
  orderProductSelect.focus();
  showToast('Товар выбран для заказа.');
}

function handleOrderStatusChange(select) {
  const orderId = Number(select.dataset.id);
  const status = select.value;
  orders = orders.map((order) => (order.id === orderId ? { ...order, status } : order));
  saveState();
  renderOrders();
  showToast(t('toast.order_status_updated'));
}

function handleAddManualOrder(event) {
  event.preventDefault();
  const form = event.target.closest('form[data-action="add-order"]');
  if (!form) return;

  const formData = new FormData(form);
  const productId = Number(formData.get('productId'));
  const quantity = Number(formData.get('quantity')) || 1;
  const product = products.find((item) => item.id === productId);

  if (!product) {
    showToast('Выберите товар для заказа.');
    return;
  }

  const order = {
    id: Date.now(),
    customerName: String(formData.get('customerName') || 'Guest').trim(),
    email: String(formData.get('email') || 'unknown@example.com').trim(),
    phone: String(formData.get('phone') || 'N/A').trim(),
    address: String(formData.get('address') || 'N/A').trim(),
    paymentMethod: '💳 Заказ добавлен вручную',
    paymentId: 'MANUAL_' + Date.now(),
    items: [{ id: product.id, name: product.name, price: product.price, quantity }],
    total: product.price * quantity,
    status: 'Pending',
    currency: currentCurrency
  };

  orders.unshift(order);
  saveState();
  renderOrders();
  form.reset();
  showToast('Заказ добавлен вручную.');
}

function handleDeleteOrder(orderId) {
  orders = orders.filter((order) => order.id !== Number(orderId));
  saveState();
  renderOrders();
  showToast('Заказ удалён.');
}

function handleOwnerAccess(event) {
  event.preventDefault();
  if (!ownerAccessForm) return;
  const formData = new FormData(ownerAccessForm);
  const enteredPassword = String(formData.get('password') || '').trim();
  if (enteredPassword === OWNER_PASSWORD) {
    localStorage.setItem('velora-owner-auth', 'true');
    renderOwnerAccessState();
    renderOwnerProducts();
    renderOrders();
    showToast(t('toast.access_granted'));
    return;
  }
  showToast(t('toast.wrong_password'));
  ownerAccessForm.reset();
}

function handleNavigationClick(event) {
  const target = event.target.closest('[data-scroll]');
  if (!target) return;
  const element = document.getElementById(target.dataset.scroll);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
}

document.addEventListener('click', (event) => {
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const { action, id } = actionButton.dataset;
  if (action === 'add-to-cart') addToCart(id);
  if (action === 'increase') updateCartQuantity(id, 1);
  if (action === 'decrease') updateCartQuantity(id, -1);
  if (action === 'remove') removeCartItem(id);
  if (action === 'delete-product') handleDeleteProduct(id);
  if (action === 'delete-order') handleDeleteOrder(id);
  if (action === 'select-product-for-order') handleSelectProductForOrder(id);
});

document.addEventListener('submit', (event) => {
  if (event.target.matches('form[data-action="update-product"]')) {
    handleProductUpdate(event);
  }
  if (event.target.matches('form[data-action="add-order"]')) {
    handleAddManualOrder(event);
  }
});

if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout);
if (addProductForm) addProductForm.addEventListener('submit', handleAddProduct);
if (ownerAccessForm) ownerAccessForm.addEventListener('submit', handleOwnerAccess);

document.addEventListener('change', (event) => {
  if (event.target.matches('select[data-action="order-status"]')) {
    handleOrderStatusChange(event.target);
  }
  if (event.target.matches('input[name="payment_method"]')) {
    handlePaymentMethodChange();
  }
});

document.addEventListener('click', handleNavigationClick);

// Инициализация
document.documentElement.lang = SUPPORTED_LOCALES[currentLocale].lang;
if (SUPPORTED_LOCALES[currentLocale].rtl) {
  document.documentElement.dir = 'rtl';
}

// Обновить все переводы на странице
updateTranslations();

// Инициализировать обработчик методов оплаты
handlePaymentMethodChange();

// Установить правильные значения в селектах
const langSelect = document.getElementById('language-select');
const currSelect = document.getElementById('currency-select');
if (langSelect) langSelect.value = currentLocale;
if (currSelect) currSelect.value = currentCurrency;

if (productGrid) renderProducts();
if (cartItems) renderCart();
renderOwnerAccessState();
if (ownerProducts) renderOwnerProducts();
if (orderList) renderOrders();
