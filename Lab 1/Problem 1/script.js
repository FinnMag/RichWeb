
function changeGridSize() {


    // Current window witdth
    const windowWidth = window.innerWidth;
    const grids = document.querySelector('.container');
    const subGrids = document.querySelectorAll('.sub-grid');

    //console.log(grids)

    if (windowWidth <= 640) {
        // 4x1 grid

        grids.style.gridTemplateColumns = '1fr';
        grids.style.gridTemplateRows = '1fr 1fr 1fr 1fr';

        subGrids.forEach((cell) => {

            cell.style.gridTemplateColumns = '1fr';
            cell.style.gridTemplateRows = '1fr 1fr 1fr fr1';

            // console.log(grid.style.order + "Order")
        });
    }

    else if (windowWidth < 960 && windowWidth > 640) {
        // 2x2 grid

        grids.style.gridTemplateColumns = '1fr 1fr';
        grids.style.gridTemplateRows = '1fr 1fr';

        subGrids.forEach((cell) => {

            cell.style.gridTemplateColumns = '1fr 1fr';
            cell.style.gridTemplateRows = '1fr 1fr';

            // console.log(grid.style.order + "Order")
        });

    }

    else {
        // 1x4 grid

        subGrids.forEach((cell) => {
            cell.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
            cell.style.gridTemplateRows = '1fr';
        });

        grids.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
        grids.style.gridTemplateRows = '1fr';

    }

}

changeGridSize();

window.addEventListener('resize', changeGridSize);