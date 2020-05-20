import React, { useState, useRef } from 'react';
import Immutable from 'immutable';
import { Editor, EditorState, RichUtils, DefaultDraftBlockRenderMap } from 'draft-js';

import BlockStyleControls from './StyleControls/BlockStyleControls';
import InlineStyleControls from './StyleControls/InlineStyleControls';
import './RichEditor.css';
import StyleFireComponent from './StyleControls/StyleFireComponent';

function RichEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editor = useRef(null);
    const styleMap = {
        CODE: {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
            fontSize: 16,
            padding: 2,
        },
    };
    const blockRenderMap = Immutable.Map({
        'new-block-type-name': {
            element: StyleFireComponent
        }
    });
    const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

    function focusEditor() {
        editor.current.focus();
    }

    function changeEditorState(newEditorState) {
        setEditorState(newEditorState);
    }

    function toggleBlockType(blockType) {
        changeEditorState(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            ));
    }

    function toggleInlineStyle(inlineStyle) {
        changeEditorState(
            RichUtils.toggleInlineStyle(
                editorState,
                inlineStyle
            )
        );
    }

    function getBlockStyle(block) {
        switch (block.getType()) {
            case 'blockquote':
                return 'RichEditor-blockquote';
            case 'new-block-type-name':
                return {
                    component: StyleFireComponent,
                    editable: false,
                }
            default: return null;
        }
    }

    let className = 'RichEditor-editor';
    let contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
        }
    }

    return (
        <div className="RichEditor-root">
            <BlockStyleControls
                editorState={editorState}
                onToggle={toggleBlockType}
            />
            <InlineStyleControls
                editorState={editorState}
                onToggle={toggleInlineStyle}
            />
            <div className={className} onClick={focusEditor}>
                <Editor
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    onChange={changeEditorState}
                    ref={editor}
                    blockRenderMap={extendedBlockRenderMap}
                    placeholder="Type your answer here..."
                />
            </div>
        </div>
    )
}


export default RichEditor;

