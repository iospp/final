// Product Database
const products = [
    // Premium Shoes (精品籃球鞋)
    {
        id: "premium-1",
        name: "Apex Future Bounce Elite",
        chineseName: "極光未來彈力旗艦款",
        category: "premium-shoes",
        categoryName: "精品籃球鞋",
        price: 5800,
        image: "images/apex-future-bounce-elite.png",
        tag: "premium",
        tagName: "旗艦",
        description: "採用全新無重力中底科技，搭配高科技霓虹發光纖維編織鞋面，提供極致彈力反饋與強大踝部保護。專為室內木地板及高強度賽事設計。",
        seoDescription: "採用全新無重力中底科技，搭配高科技霓虹發光纖維編織鞋面，提供極致彈力反饋與強大踝部保護。專為【專業室內木地板避震籃球鞋】及高強度賽事設計。",
        features: ["無重力科技中底 (Gravity-Free Midsole)", "高感度 LED 發光纖維編織鞋面", "極致防滑半透明水晶外底", "碳纖維抗扭轉支撐片"],
        sizes: [40, 41, 42, 43, 44, 45],
        colors: ["#00f2fe", "#ff5722", "#000000"]
    },
    {
        id: "premium-2",
        name: "Apex Gravity Zero Pro",
        chineseName: "重力零界專業款",
        category: "premium-shoes",
        categoryName: "精品籃球鞋",
        price: 6200,
        image: "images/apex-gravity-zero-pro.png",
        tag: "premium",
        tagName: "旗艦",
        description: "黑金奢華配色，針對職業級球員研發。後跟搭載航太級碳纖維穩定片，配合氣墊模組，展現極致衝擊吸收能力，讓你如在無重力空間般飛躍。",
        seoDescription: "黑金奢華配色，針對職業級球員研發。後跟搭載航太級碳纖維穩定片，配合氣墊模組，展現極致衝擊吸收能力，是一雙【頂級碳纖維抗扭轉旗艦戰靴】。",
        features: ["雙重密度氣墊減震系統", "航太級後跟碳纖維穩定器", "Matryx 專利高強度耐磨面料", "黑金防滑耐磨橡膠大底"],
        sizes: [41, 42, 43, 44, 45, 46],
        colors: ["#d4af37", "#000000", "#ffffff"]
    },
    {
        id: "premium-3",
        name: "Apex Hyper Drive X",
        chineseName: "超能推進力 X",
        category: "premium-shoes",
        categoryName: "精品籃球鞋",
        price: 5500,
        image: "images/apex-hyper-drive-x.png",
        tag: "premium",
        tagName: "旗艦",
        description: "絢麗霓虹撞色設計，極速爆發型球員的首選。低筒輕量化設計配合強韌針織鞋面，釋放最強第一步啟動速度，側向抗翻折性能頂級。",
        seoDescription: "絢麗霓虹撞色設計，極速爆發型球員的首選。低筒輕量化設計配合強韌針織鞋面，釋放最強第一步啟動速度，是【輕量化低筒爆發型籃球鞋】的極致代表。",
        features: ["低筒輕量爆發設計", "全掌能量回彈科技", "側向 TPU 防側翻支撐角", "人字紋多向抓地大底"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        colors: ["#ff5722", "#9d4edd", "#ffffff"]
    },
    {
        id: "premium-4",
        name: "Apex Solar Flare Max",
        chineseName: "烈陽風暴終極款",
        category: "premium-shoes",
        categoryName: "精品籃球鞋",
        price: 5900,
        image: "images/apex-solar-flare-max.png",
        tag: "premium",
        tagName: "旗艦",
        description: "亮白與炙熱烈陽橘的極光融合，搭配全息光澤覆蓋層。中底注入高回彈發泡粒子，提供極佳的落地緩震與推動感，如同烈日般引爆全場。",
        seoDescription: "亮白與炙熱烈陽橘的極光融合，搭配全息光澤覆蓋層。中底注入高回彈發泡粒子，提供極佳的落地緩震與推動感，如同烈日般引爆全場，是【高回彈避震實戰籃球鞋推薦】首選。",
        features: ["全息透氣抗撕裂鞋面", "高回彈發泡粒子中底", "全掌防側翻牽引力系統", "全天候抓地水晶大底"],
        sizes: [40, 41, 42, 43, 44, 45, 46],
        colors: ["#ffffff", "#ff784e", "#12141c"]
    },

    // Budget Shoes (評價籃球鞋)
    {
        id: "budget-1",
        name: "Apex Street Heat Low",
        chineseName: "街頭狂熱低筒實戰款",
        category: "budget-shoes",
        categoryName: "評價籃球鞋",
        price: 2680,
        image: "images/apex-street-heat-low.png",
        tag: "budget",
        tagName: "平價高性價",
        description: "專為戶外水泥球場打造的街頭實戰利器。加深抓地紋路，高耐磨橡膠大底配合防潑水網布鞋面，是日常高強度訓練與街頭半場對決的最佳夥伴。",
        seoDescription: "專為戶外水泥球場打造的街頭實戰利器。加深抓地紋路，高耐磨橡膠大底配合防潑水網布鞋面，是日常高強度訓練與街頭半場對決的最佳夥伴，也是【防滑耐磨水泥地戶外實戰鞋】的鋼鐵戰士。",
        features: ["耐磨防滑水泥地專用橡膠", "加厚高密度彈性泡棉中底", "透氣防潑水強化網布", "半掌防內翻設計"],
        sizes: [40, 41, 42, 43, 44, 45],
        colors: ["#ff0000", "#000000", "#ffffff"]
    },
    {
        id: "budget-2",
        name: "Apex Daily Court Classic",
        chineseName: "日常球場經典款",
        category: "budget-shoes",
        categoryName: "評價籃球鞋",
        price: 2480,
        image: "images/apex-daily-court-classic.png",
        tag: "budget",
        tagName: "平價高性價",
        description: "簡約時尚的清新湖水綠設計，兼具球場實戰與街頭穿搭。適度緩震中底，腳感舒適柔軟，性價比極高，是初學者與學生族群的完美首選。",
        seoDescription: "簡約時尚的清新湖水綠設計，兼具球場實戰與街頭穿搭。適度緩震中底，腳感舒適柔軟，性價比極高，是【平價高 CP 值學生籃球鞋推薦】首選款。",
        features: ["舒適避震中底底盤", "親膚透氣編織內襯", "時尚百搭運動剪裁", "經典耐磨波浪紋外底"],
        sizes: [38, 39, 40, 41, 42, 43, 44],
        colors: ["#ffffff", "#00b4d8", "#e0e0e0"]
    },
    {
        id: "budget-3",
        name: "Apex Spark",
        chineseName: "極速閃耀星火款",
        category: "budget-shoes",
        categoryName: "評價籃球鞋",
        price: 2800,
        image: "images/apex-spark.png",
        tag: "budget",
        tagName: "熱銷大推",
        description: "鮮豔亮黃撞色灰黑色合成皮革。強化鞋身包覆感與抗扭矩，實戰表現穩定，不論在進攻切入或急停起跳，皆能給予紮實的支撐與保護。",
        seoDescription: "鮮豔亮黃撞色灰黑色合成皮革。強化鞋身包覆感與抗扭矩，實戰表現穩定，不論在進攻切入或急停起跳，皆能給予戰術性支撐，是一雙【耐磨防滑高包覆室外球鞋】。",
        features: ["包覆性人工皮革拼接網布", "足弓防扭轉支撐片", "高回彈 EVA 避震材料", "室內外通用耐磨大底"],
        sizes: [40, 41, 42, 43, 44, 45],
        colors: ["#ffee00", "#424242", "#ffffff"]
    },
    {
        id: "budget-4",
        name: "Apex Cloud Bounce Lite",
        chineseName: "雲端輕量防護款",
        category: "budget-shoes",
        categoryName: "評價籃球鞋",
        price: 2300,
        image: "images/apex-cloud-bounce-lite.png",
        tag: "budget",
        tagName: "極度輕量",
        description: "僅重 320g 的超輕量化實戰鞋。薄荷綠與岩石灰的極簡融合，極細針織鞋面貼合雙腳，帶給你如光腳般靈活自在的敏捷球風表現。",
        seoDescription: "僅重 320g 的超輕量化實戰鞋。薄荷綠與岩石灰的極簡融合，極細針織鞋面貼合雙腳，帶給你如光腳般靈活自在的敏捷球風表現，為【超輕量透氣實戰籃球鞋】的最佳選擇。",
        features: ["320g 超輕量極簡化設計", "Cloud-Foam 舒適柔軟發泡中底", "3D 透氣網孔循環透氣系統", "細密多向抓地花紋"],
        sizes: [39, 40, 41, 42, 43, 44],
        colors: ["#70e000", "#757575", "#ffffff"]
    },

    // Basketballs (籃球)
    {
        id: "basketball-1",
        name: "Apex Grip Pro Official",
        chineseName: "Apex 專業控球官方皮球",
        category: "basketballs",
        categoryName: "籃球",
        price: 1800,
        image: "images/apex-grip-pro-official.png",
        tag: "normal",
        tagName: "官方比賽球",
        description: "採用超細纖維吸汗複合皮料，深溝黑紋設計，顆粒飽滿立體，手感極佳。為各級專業賽事官方指定使用球，室內木地板表現完美。",
        seoDescription: "採用超細纖維吸汗複合皮料，深溝黑紋設計，顆粒飽滿立體，手感極佳。為各級專業賽事官方指定使用球，室內木地板表現完美，是【官方比賽用高彈性七號球】。",
        features: ["超細纖維吸汗複合皮革", "深度吸排溝槽設計", "高彈性防漏丁基內膽", "立體細緻防滑顆粒"],
        sizes: [7],
        colors: ["#e65c00"]
    },
    {
        id: "basketball-2",
        name: "Apex Street King",
        chineseName: "街頭霸王戶外耐磨球",
        category: "basketballs",
        categoryName: "籃球",
        price: 980,
        image: "images/apex-street-king-outdoor.png",
        tag: "normal",
        tagName: "街頭戶外",
        description: "針對街頭水泥地及瀝青球場設計的重磅橡膠球。阻絕滑手、粗曠顆粒設計，極致耐磨防滑，是街頭鬥牛的靈魂伴侶。",
        seoDescription: "針對街頭水泥地及瀝青球場設計的重磅橡膠球。阻絕滑手、粗曠顆粒設計，極致耐磨防滑，是街頭對抗鬥牛時的【吸汗防滑戶外耐磨橡膠球】首選。",
        features: ["加厚耐磨高彈橡膠材質", "街頭炫酷塗鴉印花", "抓地力加強顆粒結構", "室外防塵抗汙皮面"],
        sizes: [7],
        colors: ["#12141c", "#ff5722"]
    },
    {
        id: "basketball-3",
        name: "Apex Cyber Glow Ball",
        chineseName: "科幻光軌霓虹籃球",
        category: "basketballs",
        categoryName: "籃球",
        price: 2200,
        image: "images/apex-cyber-glow-ball.png",
        tag: "premium",
        tagName: "黑科技概念",
        description: "啞光純黑皮面搭配特殊反光霓虹極光光條。在昏暗場景下散發奪目的科幻霓虹光譜，兼具實戰與炫耀度，是潮流收藏與夜間街頭必備。",
        seoDescription: "啞光純黑皮面搭配特殊反光霓虹極光光條。在昏暗場景下散發奪目的科幻霓虹光譜，兼具實戰性與炫耀度的黑科技潮物，也是【潮流酷炫反光夜光籃球】代表。",
        features: ["炫彩反光黑科技外層皮料", "全天候室內外通用設計", "經典 7 號標準規格", "潮流收藏與夜間街頭必備"],
        sizes: [7],
        colors: ["#000000", "#00f2fe"]
    },
    {
        id: "basketball-4",
        name: "Apex Gold Supreme Edition",
        chineseName: "金標至尊收藏級籃球",
        category: "basketballs",
        categoryName: "籃球",
        price: 3500,
        image: "images/apex-gold-supreme-edition.png",
        tag: "premium",
        tagName: "限量奢華",
        description: "奢華限量版收藏球。黑色鏡面質感皮料與金色金屬質感拼接，附專屬實木黑金底座，不論是作為辦公室擺設或榮譽展示，皆合適。",
        seoDescription: "奢華限量版收藏球。黑色鏡面質感皮料與金色金屬質感拼接，附專屬實木黑金底座，不論是作為辦公室擺設、新居落成禮，或球隊榮譽展示，皆為【限量版收藏黑金禮品籃球】首選。",
        features: ["奢華金色金屬感與鏡面黑皮拼接", "附專屬奢華實木大理石展示架", "限量附燙金編號認證卡", "高質感燙金防塵袋包裝"],
        sizes: [7],
        colors: ["#000000", "#d4af37"]
    },

    // Accessories & Others (其他配件與其它類)
    {
        id: "accessory-1",
        name: "Apex Bounce Socks",
        chineseName: "專業足弓避震精英襪",
        category: "accessories",
        categoryName: "其他配件",
        price: 390,
        image: "images/apex-bounce-socks.png",
        tag: "normal",
        tagName: "人氣單品",
        description: "為籃球高強度跳躍與急停設計的精英球襪。在足弓、腳踝及前掌處加入局部毛圈加厚加固，加壓包覆足弓，防止襪身滑動與運動拉傷。",
        seoDescription: "為籃球高強度跳躍與急停設計的精英球襪。在足弓、腳踝及前掌處加入局部毛圈加厚加固，加壓包覆足弓，防止襪身滑動與運動拉傷，是【足弓防護避震加厚精英襪】首選。",
        features: ["足弓 360 度加壓防護環", "前後掌緩震加厚毛圈層", "Coolmax吸濕排汗速乾纖維", "高彈力羅紋防滑襪口"],
        sizes: ["M (38-41)", "L (42-45)", "XL (46+)"],
        colors: ["#000000", "#ff5722", "#ffffff"]
    },
    {
        id: "accessory-2",
        name: "Apex Bounce Pack",
        chineseName: "多功能籃球運動背包",
        category: "accessories",
        categoryName: "其他配件",
        price: 1980,
        image: "images/apex-bounce-pack-backpack.png",
        tag: "normal",
        tagName: "機能背包",
        description: "防潑水機能球用背包。底部特別加設大容量透氣網狀籃球袋，可完美收納一顆 7 號球，乾濕分離乾淨衛生，另設有 15.6 吋筆電保護夾層。",
        seoDescription: "防潑水機能球用背包。底部特別加設大容量透氣網狀籃球袋，可完美收納一顆 7 號球，乾濕分離乾淨衛生，是【多功能乾濕分離運動背包】代表。",
        features: ["底部隱藏式籃球收納網網袋", "抗磨防潑水特多龍布料", "乾濕分離隔離袋與保溫袋", "人體工學減壓透氣背帶"],
        sizes: ["均碼 (45L 大容量)"],
        colors: ["#12141c", "#ff5722"]
    },
    {
        id: "accessory-3",
        name: "Apex Sole Guard Cleaner Kit",
        chineseName: "極淨鞋履防護清潔保養組",
        category: "others",
        categoryName: "其它類",
        price: 650,
        image: "images/apex-sole-guard-cleaner-kit.png",
        tag: "normal",
        tagName: "保養神組合",
        description: "頂級球鞋專用清潔保養組合。天然無化學添加的潔淨慕斯，配合特製軟木毛刷與極細纖維擦拭布，能安全且快速地清除球鞋表面頑固髒污與粉塵。",
        seoDescription: "頂級球鞋專用清潔保養組合。天然無化學添加的潔淨慕斯，配合特製軟木毛刷與極細纖維擦拭布，能安全且快速地清除球鞋表面頑固髒污與粉塵，為【職人推薦極淨鞋履清潔劑】。",
        features: ["環保無化學毒素溫和潔淨泡泡", "特製原木軟質豬毛精細毛刷", "超吸水防刮傷纖維防塵擦拭布", "便攜式防潮防水拉鍊袋包裝"],
        sizes: ["250ml 慕斯瓶裝"],
        colors: ["#ffffff", "#e0e0e0"]
    },
    {
        id: "accessory-4",
        name: "Apex Shooter Arm Sleeves",
        chineseName: "專業防護蜂巢避震防撞護臂",
        category: "others",
        categoryName: "其它類",
        price: 520,
        image: "images/apex-shooter-arm-sleeves.png",
        tag: "normal",
        tagName: "人氣單品",
        description: "投籃射手必備的蜂巢式避震護臂。加厚防撞蜂巢海綿能吸收碰撞衝擊，速乾壓力布料能緊密貼合手臂，提供穩定的肘防護，是一件球場對抗利器。",
        seoDescription: "投籃射手必備的蜂巢式避震護臂。加厚防撞蜂巢海綿能吸收碰撞衝擊，速乾壓力布料能緊密貼合手臂，提供穩定的肘關節防護與肌肉加溫效果，是一件【蜂巢減震防撞高透氣護臂】。",
        features: ["蜂巢獨立式 9mm 加厚防撞海綿", "高透氣防滑矽膠防落條", "高強伸力四面彈速乾吸汗壓縮布", "貼合修飾肌肉線條"],
        sizes: ["M", "L", "XL"],
        colors: ["#00f2fe", "#000000", "#ffffff"]
    }
];

// Shopping Cart State
let cart = [];

// Initialize Shopping Cart from LocalStorage
function initCart() {
    const savedCart = localStorage.getItem("apex_bounce_cart");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
    updateCartUI();
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem("apex_bounce_cart", JSON.stringify(cart));
    updateCartUI();
}

// Add Item to Cart
function addToCart(productId, size = "", color = "", quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Use default options if not provided
    const selectedSize = size || product.sizes[0] || "Standard";
    const selectedColor = color || product.colors[0] || "Default";

    // Check if item with same configuration already exists
    const existingItemIndex = cart.findIndex(item => 
        item.id === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            chineseName: product.chineseName,
            price: product.price,
            image: product.image,
            selectedSize: selectedSize,
            selectedColor: selectedColor,
            quantity: quantity
        });
    }

    saveCart();
    showCartNotification(product.chineseName);
}

// Remove Item from Cart
function removeFromCart(productId, size, color) {
    cart = cart.filter(item => 
        !(item.id === productId && item.selectedSize === size && item.selectedColor === color)
    );
    saveCart();
}

// Update Cart Quantity
function updateQuantity(productId, size, color, delta) {
    const itemIndex = cart.findIndex(item => 
        item.id === productId && item.selectedSize === size && item.selectedColor === color
    );

    if (itemIndex > -1) {
        cart[itemIndex].quantity += delta;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        saveCart();
    }
}

// Update navbar badges and sidebar UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Badges
    const badges = document.querySelectorAll(".cart-badge");
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? "flex" : "none";
    });

    // Update Cart Items in Sidebar
    const cartContainer = document.querySelector(".cart-items");
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>您的購物車是空的</p>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-top:5px;">快去選購您的戰靴吧！</p>
            </div>
        `;
    } else {
        let itemsHtml = "";
        cart.forEach(item => {
            itemsHtml += `
                <div class="cart-item">
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.chineseName}" title="購物車商品：${item.chineseName}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.chineseName}</div>
                        <div class="cart-item-meta">規格: 尺寸 ${item.selectedSize} | 顏色 <span style="display:inline-block; width:10px; height:10px; border-radius:50%; background-color:${item.selectedColor}; vertical-align:middle; border:1px solid rgba(255,255,255,0.2)"></span></div>
                        <div class="cart-item-price-qty">
                            <span class="cart-item-price">NT$ ${item.price.toLocaleString()}</span>
                            <div class="cart-item-qty">
                                <button class="qty-btn" onclick="updateQuantity('${item.id}', '${item.selectedSize}', '${item.selectedColor}', -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity('${item.id}', '${item.selectedSize}', '${item.selectedColor}', 1)">+</button>
                            </div>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart('${item.id}', '${item.selectedSize}', '${item.selectedColor}')" style="margin-top: 5px;">移除</button>
                    </div>
                </div>
            `;
        });
        cartContainer.innerHTML = itemsHtml;
    }

    // Update Totals
    const totalElement = document.querySelector(".cart-total-price");
    if (totalElement) {
        totalElement.textContent = `NT$ ${totalPrice.toLocaleString()}`;
    }
}

// Alert notifications when item is added
function showCartNotification(productName) {
    const notification = document.createElement("div");
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        background: rgba(18, 20, 28, 0.95);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border-left: 4px solid var(--accent-orange);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 10px;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    `;
    notification.innerHTML = `
        <span style="color:var(--accent-orange); font-weight:bold;">✓ 已加入購物車</span>
        <span>${productName} 已成功加入！</span>
    `;
    document.body.appendChild(notification);

    // Trigger slide-in
    setTimeout(() => {
        notification.style.transform = "translateY(0)";
        notification.style.opacity = "1";
    }, 50);

    // Auto remove after 3s
    setTimeout(() => {
        notification.style.transform = "translateY(100px)";
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Toggle Cart Sidebar
function toggleCart() {
    const overlay = document.querySelector(".cart-overlay");
    if (overlay) {
        overlay.classList.toggle("active");
    }
}

// Checkout simulation
function simulateCheckout() {
    if (cart.length === 0) {
        alert("您的購物車是空的，無法結帳！");
        return;
    }

    const overlay = document.querySelector(".cart-overlay");
    if (overlay) overlay.classList.remove("active");

    const checkoutModal = document.createElement("div");
    checkoutModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    checkoutModal.innerHTML = `
        <div style="background:var(--bg-secondary); border: 1px solid var(--border-color); padding: 3rem; border-radius:16px; text-align:center; max-width:450px; width:90%; box-shadow:0 20px 50px rgba(0,0,0,0.6)">
            <div style="font-size:4rem; margin-bottom:1rem; color:var(--accent-cyan); animation: bounce 1s infinite alternate;">🏀</div>
            <h2 style="font-size:2rem; margin-bottom:0.5rem; font-family:var(--font-heading);">感謝您的支持！</h2>
            <p style="color:var(--text-secondary); margin-bottom:2rem;">您的訂單已送出，包裝人員正在加緊準備您的全新裝備。準備好一起制霸球場了嗎？</p>
            <button class="btn btn-primary" id="btn-close-modal">收到！球場見</button>
        </div>
    `;
    document.body.appendChild(checkoutModal);

    // Modal animations
    setTimeout(() => {
        checkoutModal.style.opacity = "1";
    }, 50);

    // Bind close
    document.getElementById("btn-close-modal").addEventListener("click", () => {
        checkoutModal.style.opacity = "0";
        setTimeout(() => {
            checkoutModal.remove();
            cart = [];
            saveCart();
        }, 300);
    });
}

// Generate HTML elements for products dynamically
function createProductCard(product) {
    const urlParams = new URLSearchParams(window.location.search);
    const isSeoMode = urlParams.get("seo") === "true";
    const seoParam = isSeoMode ? "&seo=true" : "";

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container">
                <a href="product-detail.html?id=${product.id}${seoParam}">
                    <img src="${product.image}" alt="${product.chineseName}" title="點擊檢視 ${product.chineseName} - NT$ ${product.price.toLocaleString()}" class="product-img">
                </a>
                <span class="product-tag tag-${product.tag}">${product.tagName}</span>
            </div>
            <div class="product-info">
                <span class="product-category">${product.categoryName}</span>
                <a href="product-detail.html?id=${product.id}${seoParam}">
                    <h3 class="product-name">${product.chineseName}</h3>
                </a>
                <div class="product-footer">
                    <span class="product-price">NT$ ${product.price.toLocaleString()}</span>
                    <button class="btn-add-cart" onclick="addToCart('${product.id}')" title="加入購物車">🛒</button>
                </div>
            </div>
        </div>
    `;
}

// Page setup logic
document.addEventListener("DOMContentLoaded", () => {
    // Initialize cart elements
    initCart();

    // Highlight Active Navbar Link and Dynamic dropdown handling
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinksList = document.querySelectorAll(".nav-links a");
    const urlParams = new URLSearchParams(window.location.search);
    const isSeoMode = urlParams.get("seo") === "true";

    navLinksList.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;
        const linkPath = href.split("?")[0];
        const linkQuery = href.split("?")[1] || "";
        const isLinkSeo = linkQuery.includes("seo=true");

        if (linkPath === currentPath) {
            // Check if matching specific dropdown route
            if (currentPath === "premium-shoes.html") {
                if (isSeoMode === isLinkSeo) {
                    link.classList.add("active");
                }
            } else {
                link.classList.add("active");
            }
        }
    });

    // If premium shoe page dropdown child is active, also highlight the parent dropdown button
    if (currentPath === "premium-shoes.html") {
        const parentBtn = document.querySelector(".nav-links .nav-premium");
        if (parentBtn) {
            parentBtn.classList.add("active");
        }
    }

    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });

    // Mobile Navigation Drawer Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Connect Shopping Cart Drawer Triggers
    const cartTriggers = document.querySelectorAll(".cart-trigger");
    cartTriggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            toggleCart();
        });
    });

    const closeCartBtn = document.querySelector(".btn-close-cart");
    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", toggleCart);
    }

    const overlay = document.querySelector(".cart-overlay");
    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                toggleCart();
            }
        });
    }

    const checkoutBtn = document.querySelector(".cart-checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", simulateCheckout);
    }

    // Dynamic rendering of index/featured page products
    const featuredGrid = document.getElementById("featured-products-grid");
    if (featuredGrid) {
        // Show 4 flagship premium products on index page
        const featuredProducts = products.filter(p => p.tag === "premium");
        let gridHtml = "";
        featuredProducts.forEach(product => {
            gridHtml += createProductCard(product);
        });
        featuredGrid.innerHTML = gridHtml;
    }

    // Render Premium Shoes Page
    const premiumGrid = document.getElementById("premium-shoes-grid");
    if (premiumGrid) {
        const categoryProducts = products.filter(p => p.category === "premium-shoes");
        let gridHtml = "";
        categoryProducts.forEach(product => {
            gridHtml += createProductCard(product);
        });
        premiumGrid.innerHTML = gridHtml;
    }

    // Render Budget Shoes Page
    const budgetGrid = document.getElementById("budget-shoes-grid");
    if (budgetGrid) {
        const categoryProducts = products.filter(p => p.category === "budget-shoes");
        let gridHtml = "";
        categoryProducts.forEach(product => {
            gridHtml += createProductCard(product);
        });
        budgetGrid.innerHTML = gridHtml;
    }

    // Render Basketballs Page
    const basketballsGrid = document.getElementById("basketballs-grid");
    if (basketballsGrid) {
        const categoryProducts = products.filter(p => p.category === "basketballs");
        let gridHtml = "";
        categoryProducts.forEach(product => {
            gridHtml += createProductCard(product);
        });
        basketballsGrid.innerHTML = gridHtml;
    }

    // Render Accessories Page
    const accessoriesGrid = document.getElementById("accessories-grid");
    if (accessoriesGrid) {
        const categoryProducts = products.filter(p => p.category === "accessories");
        let gridHtml = "";
        categoryProducts.forEach(product => {
            gridHtml += createProductCard(product);
        });
        accessoriesGrid.innerHTML = gridHtml;
    }

    // Render Others Page
    const othersGrid = document.getElementById("others-grid");
    if (othersGrid) {
        const categoryProducts = products.filter(p => p.category === "others");
        let gridHtml = "";
        categoryProducts.forEach(product => {
            gridHtml += createProductCard(product);
        });
        othersGrid.innerHTML = gridHtml;
    }

    // Dynamic Render for Product Detail Page
    const detailContainer = document.getElementById("dynamic-product-detail");
    if (detailContainer) {
        // Parse product ID from url: ?id=premium-1
        const productId = urlParams.get("id");

        const product = products.find(p => p.id === productId) || products[0]; // fallback to first item
        
        if (product) {
            // Render basic properties
            const detailImg = document.getElementById("detail-image");
            detailImg.src = product.image;
            detailImg.alt = product.chineseName;
            
            // Choose description based on SEO query parameter mode
            const rawDescription = isSeoMode ? product.seoDescription : product.description;
            
            // Set image title to description for hover effect
            detailImg.title = `${product.chineseName} - ${rawDescription}`;
            
            document.getElementById("detail-name").textContent = product.chineseName;
            document.getElementById("detail-eng-name").textContent = product.name;
            document.getElementById("detail-category").textContent = product.categoryName;
            document.getElementById("detail-price").textContent = `NT$ ${product.price.toLocaleString()}`;
            
            // Format descriptions (replace bracketed text with highlighted class element if SEO mode is active)
            const formattedDescription = rawDescription.replace(/【(.*?)】/g, '<span class="seo-keyword">【$1】</span>');
            document.getElementById("detail-description").innerHTML = formattedDescription;

            // Render Tech Specs
            const specsContainer = document.getElementById("detail-specs");
            if (specsContainer) {
                let specsHtml = "";
                product.features.forEach(spec => {
                    specsHtml += `<li style="margin-bottom:0.5rem; display:flex; align-items:center; gap:8px;"><span style="color:var(--accent-orange)">◈</span> ${spec}</li>`;
                });
                specsContainer.innerHTML = specsHtml;
            }

            // Render Size Selection chips
            const sizesContainer = document.getElementById("detail-sizes");
            if (sizesContainer) {
                let sizesHtml = "";
                product.sizes.forEach((size, idx) => {
                    sizesHtml += `<div class="size-chip ${idx === 0 ? 'selected' : ''}" data-value="${size}">${size}</div>`;
                });
                sizesContainer.innerHTML = sizesHtml;

                // Size selection click trigger
                const chips = sizesContainer.querySelectorAll(".size-chip");
                chips.forEach(chip => {
                    chip.addEventListener("click", () => {
                        chips.forEach(c => c.classList.remove("selected"));
                        chip.classList.add("selected");
                    });
                });
            }

            // Render Color Selection dots
            const colorsContainer = document.getElementById("detail-colors");
            if (colorsContainer) {
                let colorsHtml = "";
                product.colors.forEach((color, idx) => {
                    colorsHtml += `<div class="color-dot ${idx === 0 ? 'selected' : ''}" data-value="${color}" style="background-color: ${color}"></div>`;
                });
                colorsContainer.innerHTML = colorsHtml;

                // Color selection click trigger
                const dots = colorsContainer.querySelectorAll(".color-dot");
                dots.forEach(dot => {
                    dot.addEventListener("click", () => {
                        dots.forEach(d => d.classList.remove("selected"));
                        dot.classList.add("selected");
                    });
                });
            }

            // Hook Add to Cart Button on Detail page
            const addToCartBtn = document.getElementById("btn-add-to-cart");
            if (addToCartBtn) {
                addToCartBtn.addEventListener("click", () => {
                    // Extract selected values
                    const selectedSizeChip = document.querySelector(".size-chip.selected");
                    const selectedSize = selectedSizeChip ? selectedSizeChip.getAttribute("data-value") : "";

                    const selectedColorDot = document.querySelector(".color-dot.selected");
                    const selectedColor = selectedColorDot ? selectedColorDot.getAttribute("data-value") : "";

                    addToCart(product.id, selectedSize, selectedColor, 1);
                });
            }
        }
    }

    // Hook Contact Form
    const contactForm = document.getElementById("contact-us-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Collect fields
            const name = document.getElementById("contact-name").value;
            const email = document.getElementById("contact-email").value;
            const message = document.getElementById("contact-message").value;

            if (!name || !email || !message) {
                alert("請填寫所有欄位！");
                return;
            }

            // Show animation overlay
            const successOverlay = document.createElement("div");
            successOverlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.85);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.3s ease;
            `;
            successOverlay.innerHTML = `
                <div style="background:var(--bg-secondary); border: 1px solid var(--border-color); padding: 3rem; border-radius:16px; text-align:center; max-width:400px; width:90%; box-shadow:0 20px 50px rgba(0,0,0,0.6)">
                    <div style="font-size:4rem; margin-bottom:1rem; color:var(--accent-orange)">✉</div>
                    <h2 style="font-size:2rem; margin-bottom:0.5rem; font-family:var(--font-heading);">信件已寄出！</h2>
                    <p style="color:var(--text-secondary); margin-bottom:2rem;">感謝您，${name}！您的訊息我們已經收到，客服專員將於 24 小時內與您聯繫。</p>
                    <button class="btn btn-primary" id="btn-close-contact-modal">確定</button>
                </div>
            `;
            document.body.appendChild(successOverlay);

            setTimeout(() => {
                successOverlay.style.opacity = "1";
            }, 50);

            // Bind close contact modal
            document.getElementById("btn-close-contact-modal").addEventListener("click", () => {
                successOverlay.style.opacity = "0";
                setTimeout(() => {
                    successOverlay.remove();
                    contactForm.reset();
                }, 300);
            });
        });
    }
});
