import React from "react";
import Search from './search';
import details from '../../data/details';

export default function EventAdmin() {
        return (
            <Search details={details} />
        );
}