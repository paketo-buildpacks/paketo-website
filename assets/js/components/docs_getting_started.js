   
export default class GettingStarted {
    constructor({ element }) {
        this.buttons = element.querySelectorAll('.getting-started__btn');
        this.notes = element.querySelectorAll('.getting-started__note');
        this.selectedButton = element.querySelector('.getting-started__btn--selected');
        this.selectedNote = element.querySelector('.getting-started__note--selected');

        for (const button of this.buttons) {
            button.addEventListener('click', this.handleClick.bind(this));
        }
    }

    handleClick(event) {
        if (event.target == this.selectedButton) {
            return;
        }

        const noteIdx = this.getNoteIdx(event.target);
        if (noteIdx == -1) {
            return;
        }

        // Clear
        this.selectedButton.classList.toggle('getting-started__btn--selected');
        this.selectedNote.classList.toggle('getting-started__note--selected');

        // Focus selected language button
        event.target.classList.toggle('getting-started__btn--selected');
        this.selectedButton = event.target;

        // Show selected language notes
        this.notes[noteIdx].classList.toggle('getting-started__note--selected');
        this.selectedNote = this.notes[noteIdx];
    }

    getNoteIdx(button) {
        for (let i = 0; i < this.buttons.length; ++i) {
            if (this.buttons[i] == button) {
                return i;
            }
        }
        return -1;
    }
  }