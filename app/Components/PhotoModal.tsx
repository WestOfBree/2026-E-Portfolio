"use client";

import Image from "next/image";
import { useEffect } from "react";

type PhotoModalProps = {
	isOpen: boolean;
	imageSrc: string;
	imageAlt: string;
	onPrev: () => void;
	onNext: () => void;
	onClose: () => void;
};

const PhotoModal = ({
	isOpen,
	imageSrc,
	imageAlt,
	onPrev,
	onNext,
	onClose,
}: PhotoModalProps) => {
	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}

			if (event.key === "ArrowLeft") {
				onPrev();
			}

			if (event.key === "ArrowRight") {
				onNext();
			}
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleEscape);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleEscape);
		};
	}, [isOpen, onClose, onPrev, onNext]);

	if (!isOpen) {
		return null;
	}

	return (
		<div
			aria-modal="true"
			role="dialog"
			className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/70 p-4 backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-6xl rounded-3xl border border-violet-200 bg-white p-3 shadow-2xl shadow-violet-300/40"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					onClick={onClose}
					aria-label="Close photo modal"
					className="absolute right-3 top-3 z-10 rounded-full border border-violet-200 bg-white/95 px-3 py-1 text-sm font-bold text-indigo-800 transition-colors hover:border-violet-300 hover:text-violet-700"
				>
					Close
				</button>
				<div className="relative aspect-4/3 max-h-[82vh] w-full overflow-hidden rounded-2xl bg-violet-50">
					<button
						type="button"
						onClick={onPrev}
						aria-label="Previous photo"
						className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-violet-200 bg-white/95 px-3 py-1.5 text-sm font-bold text-indigo-800 shadow-md shadow-violet-200/40 transition-colors hover:border-violet-300 hover:text-violet-700"
					>
						Previous
					</button>
					<button
						type="button"
						onClick={onNext}
						aria-label="Next photo"
						className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-violet-200 bg-white/95 px-3 py-1.5 text-sm font-bold text-indigo-800 shadow-md shadow-violet-200/40 transition-colors hover:border-violet-300 hover:text-violet-700"
					>
						Next
					</button>
					<Image
						src={imageSrc}
						alt={imageAlt}
						fill
						className="object-contain"
						sizes="100vw"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default PhotoModal;
