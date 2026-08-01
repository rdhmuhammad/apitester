const files = new Map<string, File>()

export const setFile = (id: string, file: File) => {
    files.set(id, file)
}

export const getFile = (id: string): File | undefined => {
    return files.get(id)
}

export const removeFile = (id: string) => {
    files.delete(id)
}
