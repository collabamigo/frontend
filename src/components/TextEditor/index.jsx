import React from 'react';
import { SocialEditor } from '@remirror/react-editors/social';
import { isBrowser } from "../../utils/auth";

const USERS = [
    { id: 'joe', label: 'Joe' },
    { id: 'john', label: 'John' },
];

const TAGS = ['remirror', 'editor'];

export default function TextEditor() {
    if (isBrowser()) {
        return (
            <div style={{ padding: 16 }} className='d-flex'>
                <SocialEditor users={USERS} tags={TAGS} />
            </div>
        );
    } else {
        return null;
    }
}