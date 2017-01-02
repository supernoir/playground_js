'use strict'

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let image = new Image()

        image.onLoad = function() {
            resolve(image)
        }

        image.onerror = function() {
            let message = 'Could not load image at ' + url
            reject(new Error(msg))
        }

        image.src = url

    })
}

export default loadImage