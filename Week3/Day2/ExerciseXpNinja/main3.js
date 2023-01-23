const button = document.getElementById('location')

const getLocation = () => {
    const locate = (position) => {
        const crd = position.coords
        console.log(`lat: ${crd.latitude}`);
        console.log(`lng: ${crd.longitude}`);
    }
    navigator.geolocation.getCurrentPosition(locate)
}


button.addEventListener('click',getLocation)