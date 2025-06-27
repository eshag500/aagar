// إنشاء الخريطة وتحديد مركزها
const map = L.map('map').setView([24.7136, 46.6753], 13); // الرياض كمثال

// إضافة طبقة OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// إضافة Marker عند النقر
let marker;
map.on('click', function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    if (marker) {
        marker.setLatLng([lat, lng]);
    } else {
        marker = L.marker([lat, lng]).addTo(map);
    }

    console.log(`موقع العقار: ${lat}, ${lng}`);
});
