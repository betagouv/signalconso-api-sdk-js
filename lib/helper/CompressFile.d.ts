export declare class CompressFile {
    static readonly compress: (f: File) => Promise<File>;
    static readonly compressImage: (f: File, options: {
        /** @default Number.POSITIVE_INFINITY */
        maxSizeMB?: number | undefined;
        /** @default undefined */
        maxWidthOrHeight?: number | undefined;
        /** @default false */
        useWebWorker?: boolean | undefined;
        /** @default 10 */
        maxIteration?: number | undefined;
        /** Default to be the exif orientation from the image file */
        exifOrientation?: number | undefined;
        /** A function takes one progress argument (progress from 0 to 100) */
        onProgress?: ((progress: number) => void) | undefined;
        /** Default to be the original mime type from the image file */
        fileType?: string | undefined;
        /** @default 1.0 */
        initialQuality?: number | undefined;
    }) => Promise<File>;
}
