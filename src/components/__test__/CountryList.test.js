import React from 'react'
import ReactDOM from 'react-dom'
import {cleanup} from '@testing-library/react'

import CountryList from '../CountryList'

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CountryList />, div);
});

