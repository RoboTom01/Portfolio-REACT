import React from 'react';
import Left from './Left';
import Center from './Center';
import Right from './Right';

function Columns() {
    return (
        <div class="row">
            <Left />
            <Center />
            <Right />
        </div>
    );
}

export default Columns