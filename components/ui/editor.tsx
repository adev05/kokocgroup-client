// import { Block, BlockNoteEditor, locales, PartialBlock } from '@blocknote/core'
// import '@blocknote/core/fonts/inter.css'
// import { BlockNoteView } from '@blocknote/mantine'
// import '@blocknote/mantine/style.css'
// import { useEffect, useMemo, useState } from 'react'

// async function saveToStorage(jsonBlocks: Block[]) {
// 	// Save contents to local storage. You might want to debounce this or replace
// 	// with a call to your API / database.
// 	localStorage.setItem('editorContent', JSON.stringify(jsonBlocks))
// }

// async function loadFromStorage() {
// 	// Gets the previously stored editor contents.
// 	const storageString = localStorage.getItem('editorContent')
// 	return storageString
// 		? (JSON.parse(storageString) as PartialBlock[])
// 		: undefined
// }

// async function uploadFile(file: File) {
// 	const body = new FormData()
// 	body.append('file', file)

// 	const ret = await fetch('https://tmpfiles.org/api/v1/upload', {
// 		method: 'POST',
// 		body: body,
// 	})
// 	return (await ret.json()).data.url.replace(
// 		'tmpfiles.org/',
// 		'tmpfiles.org/dl/'
// 	)
// }

// export default function Editor() {
// 	const [initialContent, setInitialContent] = useState<
// 		PartialBlock[] | undefined | 'loading'
// 	>('loading')

// 	// Loads the previously stored editor contents.
// 	useEffect(() => {
// 		loadFromStorage().then(content => {
// 			setInitialContent(content)
// 		})
// 	}, [])

// 	// Creates a new editor instance.
// 	// We use useMemo + createBlockNoteEditor instead of useCreateBlockNote so we
// 	// can delay the creation of the editor until the initial content is loaded.
// 	const editor = useMemo(() => {
// 		if (initialContent === 'loading') {
// 			return undefined
// 		}
// 		return BlockNoteEditor.create({
// 			initialContent,
// 			dictionary: locales.ru,
// 			uploadFile,
// 		})
// 	}, [initialContent])

// 	if (editor === undefined) {
// 		return 'Loading content...'
// 	}

// 	// Renders the editor instance.
// 	return (
// <BlockNoteView
// 	editor={editor}
// 	onChange={() => {
// 		saveToStorage(editor.document)
// 	}}
// />
// 	)
// }
