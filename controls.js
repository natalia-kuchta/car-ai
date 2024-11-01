class Controls {
    constructor(type) {
        this.forward = false;
        this.right = false;
        this.left = false;
        this.reverse = false;

        switch (type) {
            case 'KEYS':
                this.#addKeyboardListener();
                break;
            case 'DUMMY':
                this.forward = true;
                break;
        }
    }

    #addKeyboardListener() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
            }
        });
    }
}