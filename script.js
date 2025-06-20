document.addEventListener('DOMContentLoaded', () => {
    // هنا يمكن تحميل العقارات ديناميكياً من API أو قاعدة بيانات
    // حالياً، سنستخدم بيانات وهمية لعرضها.
    const propertiesData = [
        {
            id: 1,
            imageUrl: 'w.jpg',
            title: 'شقة واسعة للإيجار',
            location: 'صحراوي ،  تفرغ زينة',
            price: '6000 ريال/شهر',
            type: 'شقة',
            purpose: 'إيجار'
        },
        {
            id: 2,
            imageUrl: 's.jpg',
            title: 'فيلا فاخرة للبيع',
            location: 'عين الطلح ، شتدو عين الطلح',
            price: '2,000,000  اوقية',
            type: 'فيلا',
            purpose: 'بيع'
        },
        {
            id: 3,
            imageUrl: 'm.jpg',
            title: 'شقة عصرية للبيع',
            location: 'دار النعيم ، حي الزهور',
            price: '850,000  اوقية',
            type: 'شقة',
            purpose: 'بيع'
        },
        {
            id: 4,
            imageUrl: 'r.jpg',
            title: 'أرض سكنية مميزة',
            location: 'بوحديدة  ، مسيد لحمر',
            price: '500,000  اوقية',
            type: 'أرض',
            purpose: 'بيع'
        },
        {
            id: 5,
            imageUrl: 'r.jpg',
            title: 'أرض  مميزة',
            location: 'السودان  ، مسيد لحمر',
            price: '500,000  اوقية',
            type: 'أرض',
            purpose: 'بيع'
        },
        {
            id: 6,
            imageUrl: 'r.jpg',
            title: 'أرض  مميزة',
            location: 'السودان  ، مسيد لحمر',
            price: '100,000  اوقية',
            type: 'شقة',
            purpose: 'إيجار'
        }
    ];

    function displayProperties(properties) {
        const propertyList = document.getElementById('property-list');
        propertyList.innerHTML = ''; // تفريغ القائمة قبل إضافة العقارات الجديدة

        if (properties.length === 0) {
            propertyList.innerHTML = '<p style="text-align: center; width: 100%;">لا توجد عقارات مطابقة لمعايير البحث.</p>';
            return;
        }

        properties.forEach(property => {
            const propertyCard = `
                <div class="property-card">
                    <img src="${property.imageUrl}" alt="${property.title}">
                    <h3>${property.title}</h3>
                    <p>الموقع: ${property.location}</p>
                    <p>السعر: ${property.price}</p>
                    <button>تفاصيل</button>
                </div>
            `;
            propertyList.innerHTML += propertyCard;
        });
    }

    // عرض جميع العقارات عند تحميل الصفحة
    displayProperties(propertiesData);

    window.searchProperties = function() {
        const location = document.getElementById('location').value.toLowerCase();
        const type = document.getElementById('type').value.toLowerCase();
        const purpose = document.getElementById('purpose').value.toLowerCase();

        const filteredProperties = propertiesData.filter(property => {
            const matchesLocation = location === '' || property.location.toLowerCase().includes(location);
            const matchesType = type === '' || property.type.toLowerCase() === type;
            const matchesPurpose = purpose === '' || property.purpose.toLowerCase() === purpose;
            return matchesLocation && matchesType && matchesPurpose;
        });

        displayProperties(filteredProperties);
    };
});